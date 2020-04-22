import styled, {keyframes, css} from 'styled-components';

export const Container = styled.div`
    max-width: 500px;
    border-radius: 4px;
    padding: 30px;
    margin: 80px auto;
    background: #FFF;
    box-shadow: inset 10px 10px 20px #adadad, 
            inset -10px -10px 20px #ffffff;

    h1 {
        font-size: 20px;
        display: flex;
        align-itens: center;
        flex-direction: row;
        svg {
            margin-right: 10px;
        }
    }
    
    
`;

export const Form = styled.form`
    margin-top: 30px;
    display: flex;
    flex-direction: row;

    input {
        flex: 1;
        border: 1px solid ${props => (props.error ? '#FF0000' : 'transparent')};
        padding: 10px 30px;
        border-radius: 4px 0 0 4px;
        font-size: 17px;
        box-shadow: inset 20px 20px 60px #f2f2f2, 
            inset -20px -20px 60px #c9c9c9;
    }
`;

const animate = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

export const SubmitButton = styled.button.attrs(props => ({
    type: 'submit',
    disabled: props.loading,
}))`
    background: #0D2636;
    border: 0;
    border-radius: 0 4px 4px 0;
    margin-left: 0px;
    padding: 0 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 
    /* logo shadow */
    0px 0px 2px #0D2636,
    /* offset */
    0px 0px 0px 5px #0D2636,
    /*bottom right */
    8px 8px 15px #a7aaaf,
    
    &[disabled] {
        cursor: not-allowed;
        opacity: 0.5;
}

${props => props.loading && 
    css`
    svg{
        animation: ${animate} 2s linear infinite;
    }`
}

`;

export const List = styled.ul`
    list-style: none;
    margin-top: 20px;

    li {
        padding: 15px 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        & li {
            border-top: 1px solid #eee;
        }

        a {
            color: #0D2636;
            text-decoration: none;
        }
    }
`;
export const DeleteButton = styled.button.attrs({
    type:'button'
})`
    background:transparent;
    color: #0D2636;
    border:0;

`;