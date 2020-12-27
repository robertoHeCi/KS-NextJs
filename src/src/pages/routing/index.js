import React from 'react';
import {CardLink} from "../../components/CardLink";
import styles from '../../styles/Layout.module.css'

const IndexRouting = () => {
  return (
    <div className={styles.container}>
      <CardLink route={'/routing/post/2/1'} title={'Post link'}/>
    </div>
  )
}
export default IndexRouting
