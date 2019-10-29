import React from 'react'


const Footer = () => {
    const styles = {
        backgroundColor: '#343a40',
        color: '#fff',
          position: 'absolute',
          bottom:'0',
          width: '100%'
        }
        
    
    return ( 
        <div>
{

<footer style={styles} className="page-footer font-small blue">

 
  <div className="footer-copyright text-center py-3">© 2019 Copyright:
    <a  href='.'> Georgi</a>
  </div>
  

</footer>
}
        </div>
     );
}
 
export default Footer;