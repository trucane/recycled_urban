import React from 'react';
import classnames from 'classnames';
import styles from './home.module.css';
import {Grid} from '@material-ui/core';

import Menu from './menus/home-top-menu'



class Home extends React.Component{

     render(){

         return(

            <>
                <Menu />
                <Grid container>
                    <Grid item className={classnames(styles.sect, styles.sect1)}>Section 1
                    </Grid>
                    <Grid item className={classnames(styles.sect, styles.sect2)}>Section 2
                    </Grid>
                    <Grid item className={classnames(styles.sect, styles.sect3)}>Section 3
                    </Grid>
                </Grid>
                
            </>

        )

    }
}



export default Home;