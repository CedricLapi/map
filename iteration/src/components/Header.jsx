import React from 'react'

const Header = (props) => {
const {firstName, lastName, age, haircolor} = props;
  return (
    <div>
        <h1>My name is {firstName} {lastName}</h1>
        <h2>My age is {age} </h2>
        <h3>My haircolor is {haircolor} </h3>

    </div>
  );
}

export default Header;