import React, { Component } from 'react';
import './select.css';

const Select =({name,className,handleOnChang,value}) => {
    return(
        <div className='selectReusable'>
                    <select
                        name={name}
                        id={name}
                        className={className}
                        onChange={handleOnChang}
                        value={value}>
                            <option>Garçon</option>
                            <option>Cozinha</option>

                   </select>
                    
           </div>
    )
}
// export class Select extends Component {
//     render({name,className,handleOnChang,value}) {
//         return (
//             <div className='selectReusable'>
//                     <select
//                         name={name}
//                         id={name}
//                         className={className}
//                         onChange={handleOnChang}
//                         value={value}>
//                             <option>selecione uma opção</option>
//                    </select>
                    
//            </div>
//         );
//     }
// }
export default Select;