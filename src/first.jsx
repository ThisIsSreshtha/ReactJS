import React from "react";
import styled from "styled-components";


const Heading = styled.h1`
    color: #242e06ff;
    background-color: #FFDCDC;
    text-align: center;
`;

const Th = styled.th`
    border: 0.1px solid #000;
    padding: 7px 25px;
    background-color: #000;
    color: #fff;
`;
const Td = styled.td`
    border: 0.1px solid #000;
    padding: 4px 25px;
    text-align: center;
`;
const First = () =>{
    return(
        <>
        <Heading>Hi My name is Sreshtha Dutta 😊</Heading>
            <table>
                <thead>
                    <tr>
                        <Th>Sno</Th>
                        <Th>Name</Th>
                        <Th>Father's Name</Th>
                        <Th>Mobile</Th>
                        <Th>Email ID</Th>
                        <Th>Address</Th>
                        <Th>Course</Th>
                        <Th>Session</Th>
                        <Th>Status</Th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <Td>1</Td>
                        <Td>Test</Td>
                        <Td>Test</Td>
                        <Td>9910201010</Td>
                        <Td>test@gmail.com</Td>
                        <Td>Kolkata</Td>
                        <Td>BCA</Td>
                        <Td>2020-23</Td>
                        <Td><button>Active</button></Td>
                    </tr>
                    <tr>
                        <Td>2</Td>
                        <Td>Test</Td>
                        <Td>Test</Td>
                        <Td>9910201010</Td>
                        <Td>test@gmail.com</Td>
                        <Td>Kolkata</Td>
                        <Td>BCA</Td>
                        <Td>2020-23</Td>
                        <Td><button>In-active</button></Td>
                    </tr>
                    <tr>
                        <Td>3</Td>
                        <Td>Test2</Td>
                        <Td>Test2</Td>
                        <Td>9910201010</Td>
                        <Td>test@gmail.com</Td>
                        <Td>Mumbai</Td>
                        <Td>BCA</Td>
                        <Td>2020-24</Td>
                        <Td><button>In-active</button></Td>
                    </tr>
                    <tr>
                        <Td>4</Td>
                        <Td>Test4</Td>
                        <Td>Test4</Td>
                        <Td>9910201010</Td>
                        <Td>test@gmail.com</Td>
                        <Td>Mumbai</Td>
                        <Td>BCA</Td>
                        <Td>2020-25</Td>
                        <Td><button>In-active</button></Td>
                    </tr><tr>
                        <Td>5</Td>
                        <Td>Test5</Td>
                        <Td>Test5</Td>
                        <Td>9910201010</Td>
                        <Td>test@gmail.com</Td>
                        <Td>Mumbai</Td>
                        <Td>BCA</Td>
                        <Td>2020-26</Td>
                        <Td><button>In-active</button></Td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}




export default First


