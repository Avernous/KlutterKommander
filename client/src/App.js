/** @jsxRuntime classic */
/** @jsx jsx */
//import React from 'react';
import { Container, AppBar, Typography } from '@mui/material';

import wastePile from './images/wastePile.png';
import { jsx } from '@emotion/react'; 

const App = () => {

    const appBar = {
        borderRadius: 15,
        margin: '0 0 30px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
    

    return(
        <Container maxWidth="lg">
            <AppBar position='static' color="inherit" css={appBar} >
                <Typography varient="h2">Klutter Kommander</Typography>
                <img src={wastePile} css={{marginLeft: '15px'}} alt="Memories" height="60" />
            </AppBar>
        </Container>
        
    );
}

export default App;
