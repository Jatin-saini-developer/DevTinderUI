import React from "react";

const SignUpPage = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
          DevTinder
        </h1>
      </div>
      <div>
        <p>Join thousands of developers finding their perfect match</p>
      </div>

      <div>
        <h1>Create Your Developer Profile</h1>
        <p>Let's build your coding identity</p>

        <div>
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="E-mail" />
        </div>

        <div>
          <input type="password" placeholder="password" />
        </div>

        <div>
          <textarea name="BIO" id="BIO"></textarea>
        </div>

       <div>
         <label for="skills">Skills & Technologies</label>
        <input
          id="skills"
          type="text"
          placeholder="e.g., React, Python, Node.js"
        />
        <button>+</button>
       </div>
      </div>
    </div>
  );
};

export default SignUpPage;
