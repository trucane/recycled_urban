import React from 'react';
import classnames from 'classnames';
import styles from './home.module.css'



class Home extends React.Component{

     render(){

         return(

            <>
                <div className={classnames(styles.container)}>
                <section className={classnames(styles.sect)}>
                        <div>One section</div>
                    </section>
                    <section>
                        <div>Two section</div>
                    </section>
                    <section>
                        <div>Three section</div>
                    </section>
                </div>
            </>

        )

    }
}



export default Home;