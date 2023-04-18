import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

< DialogItem />;
< Message />;

const Dialogs = (props) => {

    let dialogs = [
        { id: 1, name: 'Rustem' },
        { id: 2, name: 'Alsu' },
        { id: 3, name: 'Mama' },
        { id: 4, name: 'Gulnaz' },
        { id: 5, name: 'Papa' }
    ]

        let messages = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your React?' },
        { id: 3, message: 'Well' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' }
    ]


    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = messages.map ( m => <Message message={m.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
              { dialogsElements}
            </div>

            <div className={s.messages}>
              {messagesElements}  
            </div>
        </div>)


 
}
export default Dialogs;