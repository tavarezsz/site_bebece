import React, { useEffect} from 'react'
import './Message.scss'

function Message({msg, onClose}) {

    //a partir do carregamento do componente conta 2s e executa a função de fechamento
    useEffect(() => {
        setTimeout(() => {
            onClose()
        },2000)
    },[onClose]) 

  return (
    <div className='message'>
        <p>{msg}</p>
    </div>
  )
}

export default Message