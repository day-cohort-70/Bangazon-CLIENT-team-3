import { useEffect, useState } from 'react'
import CardLayout from '../components/card-layout'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Table from '../components/table'
import { getOrders } from '../data/orders'

export default function Orders() {
  const [orders, setOrders] = useState([])
  const headers = ['Order Date', 'Total', 'Payment Method']

  const fetchPaymentTypes = async (url) => {
    if (!url) return "No payment made"

    const response = await fetch(`${url}`, {
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`
      }
    })
    const paymentReply = await response.json()
    return paymentReply?.merchant_name
  }

  const caculateTotal = (productArray) => {
    const totalAmount = 0
    productArray.map(item => (totalAmount += item.product.price))
    return totalAmount
  }

  useEffect(() => {
    const fetchOrdersAndPaymentTypes = async () => {
      const ordersData = await getOrders()
      if (ordersData) {
        const ordersWithPaymentTypes = await Promise.all(
          ordersData.map(async (order) => ({
            ...order,
            paymentType: await fetchPaymentTypes(order.payment_type),
            total: caculateTotal(order.lineitems)
          }))
        )
        setOrders(ordersWithPaymentTypes)
      }
    }

    fetchOrdersAndPaymentTypes()
  }, [])

  return (
    <>
      <CardLayout title="Your Orders">
        <Table headers={headers}>
          {
            orders.map((order) => (
              <tr key={order.id}>
                <td>{order.created_date}</td>
                <td>${order.total}</td>
                <td>{order.paymentType}</td>
              </tr>
            ))
          }
        </Table>
        <></>
      </CardLayout>
    </>
  )
}

Orders.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      <section className="container">{page}</section>
    </Layout>
  )
}
