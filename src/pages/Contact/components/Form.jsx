import React, {useState} from 'react'

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const ChangedInput = e =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const SubmitForm = e => {
        e.preventDefault()
        console.log('XXX ', formData)
    }
    return(
        <section className='FormContainer'>
            <h2>Contact Me</h2>
            <form onSubmit={(e)=>SubmitForm(e)}>
                <div>
                    <label>Name</label>
                    <input type='text' required placeholder='Jane Appleseed' name='name' onChange={(e)=> ChangedInput(e)}/>
                </div>
                <div>
                    <label>Email</label>
                    <input type='email' required placeholder='email@example.com' name='email' onChange={(e)=> ChangedInput(e)}/>
                </div>
                <div>
                    <label>Message</label>
                    <input type='text' required placeholder='How can I help?' name='message' onChange={(e)=> ChangedInput(e)}/>
                </div>
                <input className='Submit' type='submit' value='Send Message'/>
            </form>
        </section>
    )
}

export default Form