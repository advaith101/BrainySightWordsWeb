import styled from 'styled-components';

// same as 'export default styled.button'
export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 2rem;
    background: transparent;
    border: 0.05rem solid var(--lightBlue);

    border-color: ${props => 
        props.cart ? "var(--mainYellow)" : "var(--white)"};
    color: ${prop => prop.cart ? "var(--mainYellow)" : "var(--white)"};
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    &: hover {
        background: ${prop => prop.cart ? "var(--mainYellow)" : "var(--white)"};
        color: var(mainBlue);
    }
    &: focus {
        outline: none;
    }
`;
