const Singleton = (function(){
  function ProcessManager() { /*...*/ }

    let pManager


  function createProcessManager()
  {
    pManager = new ProcessManager()
    return pManager
  }

  return {
      getProcessManager: () =>
      {
        if(!pManager)
          pManager = createProcessManager()
        return pManager
      }
  }
})()

const singleton = Singleton.getProcessManager()
const singleton2 = Singleton.getProcessManager()

console.log(singleton === singleton2) // true
