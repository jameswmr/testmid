import services from "../services";
import { useEffect, useState } from "react";
import { CommentList } from "./commentlist"
// you should design your register page and api
function chat() {
  services.user.getID().then((data) => {
    if(data === null){
      window.location.replace("/");
        alert("Sign in first and wait a second");
    }
  })
  const [formData, setFormData] = useState({ message: "" });

  /** @type {React.ChangeEventHandler<HTMLInputElement>} */
  const handleTextInputChange = ({ target: { name, value } }) => {
    // const { name, value } = event.target
    // obj = { ...prev }; obj[name] = value
    setFormData((prev) => ({  
      ...prev,
      [name]: value,
    }));
    console.log(name,value);
  };  
  const [comment, setcomment] = useState([]);
  /** @type {React.FormEventHandler<HTMLFormElement>} */
  const handleFormSubmit = (event) => {
    if(formData.message === ""){
      alert("Please comment first");
    }
    else{
      services.user.post({ message: formData.message  });
      setTimeout(function() {
      setFormData({ message : ""});
      window.location.replace("/chat");
    }, 1000);
  }

    
 
    event.preventDefault();
  };


  useEffect(() => {
    services.user.getAllComment().then((allComment) => {
      setcomment(allComment);
    });
  }, []);
  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <form className="mt-8 space-y-6" onSubmit={handleFormSubmit}>
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="username" className="sr-only">
                  Type in
                </label>
                <input
                  name="message"
                  type="text"
                  required
                  className="relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Type Whatever You Want to Say"
                  value={formData.message}
                  onChange={handleTextInputChange}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                POST
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
      <CommentList comments={comment} />
      </div>
    </>
  );
}
export default chat;