import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  
  
  const[action1, setAction1 ]=useState(true);
  const[action2, setAction2 ]=useState(true);

  const[action3, setAction3 ]=useState(false);

  const[action4, setAction4 ]=useState(true);

  const[action5, setAction5 ]=useState(true);

  const[action6, setAction6 ]=useState(true);

  

  return (
    <div className="App">

<div class="mainDiv">
  <div class="square"></div>
  <div class="square2"></div>
  <div class="square3"></div>
</div>


{ action1 ? <>  <span onClick={()=>setAction1((prev)=>!prev)} className="dotRed1"></span>
  </> : <> <span onClick={()=>setAction1((prev)=>!prev)} className="dot1"></span>
  </>
}

{ action2 ? <>  <span className="dotRed"></span>
  </> : <> <span className="dot"></span>
  </>
}

{ action3 ? <>  <span className="dotRed"></span>
  </> : <> <span className="dot"></span>
  </>
}
{ action4 ? <>  <span className="dotRed"></span>
  </> : <> <span className="dot"></span>
  </>
}
{ action5 ? <>  <span className="dotRed"></span>
  </> : <> <span className="dot"></span>
  </>
}
{ action6 ? <>  <span className="dotRed"></span>
  </> : <> <span className="dot"></span>
  </>
}

    </div>
  );
}

export default App;
