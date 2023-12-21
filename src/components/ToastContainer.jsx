import React, { useState } from 'react';

function Toast({ message, type, onClose }) {
  let borderColor, bgColor;

  switch (type) {
    case 'error':
      borderColor = 'border-red-400';
      bgColor = 'bg-red-100';
      break;
    case 'success':
      borderColor = 'border-green-400';
      bgColor = 'bg-green-100';
      break;
    default:
      borderColor = 'border-indigo-400';
      bgColor = 'bg-purple-100';
  }

  return (
    <div className={`w-full mb-2 select-none border-l-4 ${borderColor} ${bgColor} p-4 font-medium font-sans hover:${borderColor} flex justify-between items-center`}>
      {message}
      <button onClick={onClose} className="ml-4">X</button>
    </div>
  );
}

function ToastContainer({toasts, removeToast}) {

  return (
    <div>
   
      <div className="fixed bottom-0 right-0 p-4 space-y-2">
        {toasts.map(toast => (
          <Toast key={toast.id} message={toast.message} type={toast.type} onClose={() => removeToast(toast.id)} />
        ))}
      </div>
    </div>
  );
}

export default ToastContainer;
