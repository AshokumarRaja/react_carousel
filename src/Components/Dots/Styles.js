import styled from 'styled-components';

export const StyledDotsConatiner = styled.div`
    position: absolute;
    bottom: 150px;
    height:50px;
    width: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
   

`
export const StyledDot = styled.div`
    padding: 10px;
    margin-right: 5px;
    cursor: pointer;
    border-radius: 50%;
    background: ${props=>props.active ? 'black' : 'lightgray'};
`