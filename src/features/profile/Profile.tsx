import { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux';



import {
  updateProfileAsync,
  updateName,
  updateEmail,
  updatePhone,
  selectEmail,
  selectName,
  selectPhone
} from './profileSlice'

function Profile(){
  const name = useSelector(selectName)

  const email = useSelector(selectEmail)
  const phone = useSelector(selectPhone)
  const [nameInput, setnameInput] = useState('')
  const [emailInput, setemailInput] = useState('')
  const [phoneInput, setphoneInput] = useState('')
  const dispatch = useDispatch();



  return(
    <div>
      <ul>
        <li>
          {nameInput}
        </li>
        <li>
          {emailInput}
        </li>
        <li>
          {phoneInput}
        </li>
      </ul>
      <input type="text" value={nameInput}
          onChange={(e) =>  setnameInput(e.target.value)}
          aria-label="Set name"

      />
              <button
          onClick={() =>
            dispatch(updateName(nameInput))
          }
        >
          Change Name
        </button>



        <input type="text" value={emailInput}
          onChange={(e) =>  setemailInput
            (e.target.value)}
          aria-label="Set name"

      />
              <button
          onClick={() =>
            dispatch(updateEmail(emailInput))
          }
        >
          Change Email
        </button>


        <input type="text" value={phoneInput}
          onChange={(e) =>  setphoneInput(e.target.value)}
          aria-label="Set name"

      />
              <button
          onClick={() =>
            dispatch(updatePhone(phoneInput))
          }
        >
          Change Phone
        </button>
    </div>
  )




}

export default Profile
