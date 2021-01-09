import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Toast(){
    const notify=()=> toast.success('Hello');
    return(
        <div>
            <ToastContainer />
            <button onClick={notify}>Notify</button>
        </div>
    );
}
export default Toast;