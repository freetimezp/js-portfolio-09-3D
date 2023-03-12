import React from 'react';
import styled from 'styled-components';
import Map from "./Map";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    gap: 50px;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Form = styled.form`
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 25px;
`;

const Input = styled.input`
    padding: 20px;
    background: #e8e6e6;
    border: transparent;
    border-radius: 5px;
    font-size: 20px;
`;

const TextArea = styled.textarea`
    padding: 20px;
    background: #e8e6e6;
    border: transparent;
    border-radius: 5px;
    font-size: 20px;
`;

const Button = styled.button`
    background-color: #da4ea2;
    color: #fff;
    border: transparent;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
    padding: 20px;
    font-size: 20px;
    transition: all 0.3s ease;

    &:hover {
        background-color: #d83b9a;
    }
`;

const Right = styled.div`
    flex: 1;
`;

const Contact = () => {
    return (
        <Section>
            <Container>
                <Left>
                    <Form>
                        <Title>Contact Us</Title>
                        <Input placeholder='Name' />
                        <Input placeholder='Email' />
                        <TextArea placeholder='Type your message' rows={10} />
                        <Button>Send</Button>
                    </Form>
                </Left>
                <Right>
                    <Map />
                </Right>
            </Container>
        </Section>
    );
}

export default Contact;
