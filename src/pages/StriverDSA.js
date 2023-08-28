import Navbar from "./Navbar"
import Pro2 from "./Pro2";
import data from "../StriverDSAData";
import Head from "next/head";

const StriverDSA = () => {
  return (
    <>
     
    <Head>
      <title>A TO Z SDE Sheet</title>
      <meta
        name="description"
        content="A TO Z SDE Sheet by Striver"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

        <div>
      <div className="w-full h-full dark:bg-[#18191A]  mt-16 ">
        <Navbar />

        {/* SHEETS NAME STARTS FROM HERE */}

        <div class=" flex justify-center items-center h-10 pt-3  ">
          <p class="  dark:text-[#ffffff] text-2xl font-bold  ">
           A TO Z SDE Sheet 
          </p>
           


        </div>
        {/* SHEETS NAME END FROM HERE */}

        {/* SHEETS STARTS FROM HERE */}

        <div className="  w-full h-full mx-auto items-center ">
          <div class="rounded-lg w-full   "></div>

          {/* SHEETS STARTS FROM HERE */}

          {/* {data.map((obj) => (
            <Pro2 data={obj} />
          ))} */}
          {data.map((obj, index) => (
  <Pro2 key={index} data={obj} />
))}
        </div>
      </div>
    </div>

    </>
  )
}

export default StriverDSA;