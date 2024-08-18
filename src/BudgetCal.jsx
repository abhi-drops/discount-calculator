import React, { useState } from 'react'


function BudgetCal() {

  const [amt , setAmt]= useState(0);
  const [per , setPer]= useState(0)
  const [disAmt , setDisAmt] = useState(0)

  function Cal() {
    console.log('calculate');

    console.log(amt);
    console.log(per);

    const newCost = amt - ((per / 100) * amt );
    console.log(newCost);

    setDisAmt(newCost)

  }

  return (
    <>
        <div className='h-screen w-screen bg-lime-950  font-semibold flex justify-center items-center'>
          <div className='flex max-sm:flex-col   h-3/4 w-3/4  rounded-lg '>
            <div className='h-full md:w-1/2 w-full  border border-lime-700 border-4 rounded-s-lg max-md:rounded-t max-md:rounded-b-none  flex flex-col justify-center items-center' style={{backgroundImage:"url('https://img.freepik.com/free-vector/green-fluid-background-frame_53876-114482.jpg?w=1060&t=st=1723793027~exp=1723793627~hmac=3eb01db4a0dff35ce961d049e2023fee04ca1b13465cc689236a757a09548f4b'" , backgroundSize:"cover" , backgroundPosition:"center"}}>

            {amt !== 0 && per !== 0 && (
              <>
                <h1 className="text-lime-900 mb-2">Discounted Price:</h1>
                <h1 className="text-4xl text-lime-800 font-extrabold">₹{disAmt}</h1>
              </>
            )}



            </div>
            <div className='h-full md:w-1/2 max-sm:p-5 w-full bg-lime-700 rounded-e-lg max-md:rounded-b-lg max-md:rounded-t-none flex flex-col justify-center items-center'>
                <div className='flex flex-col'>
                <p className='text-2xl font-black mb-20 text-lime-50'>DISCOUNT CALCULATOR</p>
                <label htmlFor="amt" className='text-lime-50 font-bold pb-3'  >Enter the Amount :</label>
                <input type="number" id='amt' placeholder='1000' className='rounded-lg w-full p-2 mb-3' onChange={(e) => setAmt(e.target.value)} />
                <label htmlFor="per" className='text-lime-50 font-bold pb-3' >Enter the Discount Percentage :</label>
                <input type="number" id='per' placeholder='15' className='rounded-lg w-full p-2 mb-10' onChange={(e) => setPer(e.target.value)} />
                <button className='bg-red-800 text-lime-50 p-2 rounded-lg w-full hover:bg-red-950 hover:text-lime-50' onClick={()=>{Cal()}}>Calculate</button>
                </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default BudgetCal