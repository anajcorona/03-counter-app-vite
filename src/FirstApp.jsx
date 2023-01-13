// //import { Fragment } from "react";
// //el Fragmemnt es igual al <> </>
// //<Fragment> </Fragment>
// const newMessage = {
//   name: 'Ana',
//   age: 26
// };

// function hello() {
//     return 'Wenas Wenas!';
// }

// // const lol = () => {
// //   return (
// //     <div>HelloWorldApp</div>
// //     )
// //   }
  
  
//   export const FirstApp = () => {
  
//     //Puede ir adentro o afuera dependiendo del scoope XD si queda afuera es maa efectivo por la memoria
//     // const HelloWorldApp = () => {
//     //   return 'Holaa'
//     // }

//     return (
//       <>
//         <h1> { JSON.stringify(newMessage) } </h1>
//         <h3> { hello() + ' ' + newMessage.name } </h3>
//         {/* <h3> { lol() } </h3>
//         <h3> { HelloWorldApp() } </h3> */}
//         {/* <code> { JSON.stringify(newMessage) } </code> */}
//         <p> Lalala </p>
//       </>
//     )
//   }

import PropTypes from 'prop-types';
  
export const FirstApp = ( { title, subtitle, name } ) => {
  return (
    <>
      <h1 data-testid="test-title"> { title } </h1>
      <h2> { subtitle } </h2>
      <h2> { subtitle } </h2>

      <h2> { name } </h2>


      <p> Lalala </p>
    </>
  )
}

  //Define si una propiedas es requerida y de que valor debe ser
FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}

// define los valores por default de las propiedades
// Se ejecutan primero que los propTypes
FirstApp.defaultProps = {
//  title: "No hay titutlo",
  subtitle: "No hay subtitile",
  name: "Ana"
}
  