import React, { useState, useEffect, useContext } from "react";
 
function Pro2({ data, id }) {
  useEffect(() => {
    (async () => {
      const res = await localStorage.getItem(`DSA${data.position}`);
      const states = await JSON.parse(res);

      setCheckBoxState(states?.checkBoxState);
      setCheckNum(states?.checkNum);
    })();
  }, []);
  const [clicked, setClicked] = useState(false);
  // const questionlength = data.questions.length;
 let questionlength =0;
  if (data && data.questions) {
    questionlength = data.questions.length;
  }
  function is_checked(index) {
    let temp = clicked;
    temp = !temp;
    setClicked(temp);
  }

  const sum = (array) => {
    return array ? array.reduce((acc, cur) => acc + cur, 0) : 0;
  };

  var list = [];
  var num = [];
  const lowEnd = 1;
  const highEnd = 61;
  const topicName = data ? data.topicName : '';

  // for (var i = 1; i <= questionlength; i++) {
  //   num.push(0);
  //   list.push(false);
  // }
  const [checkNum, setCheckNum] = useState(0);
  const [checkBoxState, setCheckBoxState] = useState(
    Array(questionlength).fill(false)
  );

  async function HandleCheck(index, position) {
    var templist = checkBoxState || [];
    var tempNum = checkNum;
    if (templist[index]) {
      setCheckNum(checkNum - 1);
    } else {
      setCheckNum(checkNum + 1);
    }
    templist[index] = !templist[index];
    setCheckBoxState(templist);
    await localStorage.setItem(
      `DSA${position}`,
      JSON.stringify( {checkNum, checkBoxState })
    );
  }
  const [name, setName] = useState(false);

  function handleName() {
    var temp = name;
    temp = !temp;
    setName(temp);
    // console.log(temp);
  }

  return (
    <>
     <div className="flex flex-col items-center justify-center">
  <div className="my-1 w-full max-w-4xl">
    <button class="w-full flex rounded-lg px-4 py-2 border-2 border-blue-500 dark:border-white pl-28 hover:bg-blue-600 hover:text-blue-100 duration-300 text-black text-xl font-semibold dark:text-white text-left   " onClick={() => is_checked()}>
      <span className="w-100  ">{topicName}</span>
      <div className="text-[#000000] flex justify-between ml-auto mr-5 dark:text-white">
        <p className="">{sum(checkBoxState)}/{questionlength}{" "}</p>
      </div> 
    </button>
     {clicked ? 
       (<div class="w-full flex  px-4 py-2 border-2 border-black dark:border-white   text-black text-xl  dark:text-white  ">
        
        <table className="w-full">
          <thead className="bg-[#92c9e6] h-10 outline hover:outline-2 rounded  dark:text-black">
            <th className="px-4">S.No</th>
            <th className="px-4">Problems</th>
            <th className="px-4">Status</th>
          </thead>
          {data.questions.map((question, index) => (
            <tbody key={index} className="">
              <tr className=" border-b-2   "> 
                <td className="p-1 px-4" data-label="S.No">{index + 1}</td>
                <td className="px-4 text-blue-900 dark:text-white" data-label="Problems">
                  <a href={question.URL} target="_blank" rel="noreferrer">
                    {question.Problem}
                  </a>
                </td>
                <td className="item-center justify-center flex" data-label="Status">
                  <div className="  ">
                    {checkBoxState && checkBoxState[index] ? (
                      <input
                        className=""
                        type="checkbox"
                        value={name}
                        onChange={() => handleName()}
                        onClick={() => HandleCheck(index, data.position)}
                        checked={true}
                      />
                    ) : (
                      <input
                        className=""
                        type="checkbox"
                        value={name}
                        onChange={() => handleName()}
                        onClick={() => HandleCheck(index, data.position)}
                      />
                    )}
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
     </div>
     
      )
       : null 
    }

    {/* {clicked ? (
      <div className="w-full">
        <table className="relative bg-red-100 mt-[1px]">
          <thead className="bg-[#92c9e6] h-10">
            <th className="px-4">S.No</th>
            <th className="px-4">Problems</th>
            <th className="px-4">Status</th>
          </thead>
          {data.questions.map((question, index) => (
            <tbody key={index}>
              <tr>
                <td className="p-1 px-4" data-label="S.No">{index + 1}</td>
                <td className="px-4" data-label="Problems">
                  <a href={question.URL} target="_blank" rel="noreferrer">
                    {question.Problem}
                  </a>
                </td>
                <td className="px-4" data-label="Status">
                  <div className="status">
                    {checkBoxState && checkBoxState[index] ? (
                      <input
                        className="Stat"
                        type="checkbox"
                        value={name}
                        onChange={() => handleName()}
                        onClick={() => HandleCheck(index, data.position)}
                        checked={true}
                      />
                    ) : (
                      <input
                        className="Stat"
                        type="checkbox"
                        value={name}
                        onChange={() => handleName()}
                        onClick={() => HandleCheck(index, data.position)}
                      />
                    )}
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    ) : null} */}
  </div>
</div>
 
    </>
  );
}

export default Pro2;
