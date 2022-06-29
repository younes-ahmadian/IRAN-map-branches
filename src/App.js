import './App.css';

function App() {

  const branchIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="App">
        <img  className = "iranMap" src="../picture/IRAN.png" alt="IRAN MAP!"/>

          { branchIndex.map(i => <a  href="https://www.google.com" target="_blank">
                                    <div className={`points p${i}`}>P
                                      <span className='tooltipText'>
                                        شماره تلفن: <span className='text'>123456</span><br/>
                                        آدرس: <span className='text'>آدرس شعبه اینجا وارد شود</span><br/>
                                        مدیر شعبه: <span className='text'>نام مدیریت شعبه</span>
                                      </span>
                                    </div>
                                 </a>
                            )
          }
        
    </div>
  );
}

export default App;
