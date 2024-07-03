import { useState } from "react"
import { Input } from "../form-elements"
import Modal from "../modal"

export default function AddPaymentModal({ showModal, setShowModal, addNewPayment }) {
  const [merchantName, setMerchantName] = useState('')
  const [accountNumber, setAccountNumber] = useState('')
  const [expirationDate, setExpirationDate] = useState('')

  const handleAddPayment = () => {
    console.log({
      account_number: accountNumber,
      merchant_name: merchantName,
      expiration_date: `${expirationDate}-01`
    })
    addNewPayment({
      account_number: accountNumber,
      merchant_name: merchantName,
      expiration_date: `${expirationDate}-01`,
      create_date: new Date().toJSON().slice(0, 10)
    })
  }

  return (
    <Modal showModal={showModal} setShowModal={setShowModal} title="Add New Payment Method">
      <>
        <Input
          id="merchantName"
          type="text"
          label="Merchant Name"
          value={merchantName}
          onChange={(e) => setMerchantName(e.target.value)}
        />
        <Input
          id="accNum"
          type="text"
          label="Account Number"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
        />
        <Input
          id="expireDate"
          type="month"
          label="Expiration Date"
          value={expirationDate}
          onChange={(e) => setExpirationDate(e.target.value)}
        />
      </>
      <>
        <button
          className="button is-success"
          onClick={handleAddPayment}
        >Add Payment Method</button>
        <button className="button" onClick={() => setShowModal(false)}>Cancel</button>
      </>
    </Modal>
  )
}