import react from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMusic} from "@fortawesome/free-solid-svg-icons";


const Nav = ({setLibraryStatus, libraryStatus}) => {
    return(
       <nav className="">
           <h1><span className="9ja">9ja</span>Beatz</h1>
           <button onClick={() => setLibraryStatus(!libraryStatus)}>
               <span>Playlist</span>
               <FontAwesomeIcon icon={faMusic} />
           </button>
       </nav> 
    )
};

export default Nav;