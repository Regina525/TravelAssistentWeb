import React from "react"
import Row from "./Row"


const Cards = () => {
    const cards = [
        {
          image: 'https://th.bing.com/th/id/R.169fb8375c5a6843bb8371ba37c54761?rik=%2fx90RQ%2b3qaO4hA&riu=http%3a%2f%2fblueolive.pt%2fwp-content%2fuploads%2f2018%2f02%2fMo%c3%a7ambique-766x420.jpg&ehk=jSIOWiSBoK3muVizwJn1OEA5NkyqD99OSMRC%2b9y1xR8%3d&risl=&pid=ImgRaw&r=0',
          title: 'Moçambique',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        },
        {
          image: 'https://th.bing.com/th/id/OIP.i32O0V1Hj4-nyCr1Zbb_TwHaEL?pid=ImgDet&w=568&h=320&rs=1',
          title: 'Angola',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        },
        {
          image: 'https://th.bing.com/th/id/OIP._T1M343oWbf3vZSPIRFwjwHaFQ?pid=ImgDet&rs=1',
          title: 'Estados unidos',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        },
        {
            image: 'https://th.bing.com/th/id/R.6a72187b0a3878c912b507593d5e7997?rik=QmhUIe%2brDb7lcg&riu=http%3a%2f%2fstrefalifestyle.pl%2fwp-content%2fuploads%2f2018%2f02%2fdubai-1050418_1920-1024x578.jpg&ehk=tLkN6VyFteEMZ%2bQcOA6TGZCJjN978NTxAtCnusXYHS8%3d&risl=&pid=ImgRaw&r=0',
            title: 'Dubai',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
          },
      ]
      
    
    
  return (

    <Row className="grid-cols-2">  
      {cards.map((card, index) => {
        return (
          <div key={index} className="shadow-xl rounded-xl text-justify w-full">
            <img src={card.image} alt={card.title}/>
            <div className="w-4/5 mx-auto">
            <h2 className=" font-bold py-5">{card.title}</h2>
            <p className="">{card.description}</p>
            </div>
          </div>
        );
      })}
 
    </Row>
   
  )
}


export default Cards
