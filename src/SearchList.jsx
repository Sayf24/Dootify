import React from 'react'
import AutoCompleteButtons from './AutoCompleteButtons';

const searchList = props => {

    return (
        <ul className="unorderedSearchList">
            {
                props.list.map((title)=>{
                    return (
                        <AutoCompleteButtons onClick={props.onClick} buttonValue={title}> </AutoCompleteButtons>
                    )
                }


                )
            }
        </ul>
    )
}


export default searchList

