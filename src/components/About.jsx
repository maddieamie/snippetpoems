
import React, { Component} from "react";


class About extends Component {

  render() {
    
    return (
      <div className="flex row">
        <div className="max-w-lg mx-auto my-10 bg-green-100 rounded-lg shadow-md p-5">
            
                <h2 className="text-center text-2xl text-teal-700 font-semibold mt-3">Maddie Amelia Lewis</h2>
                <p className="text-center text-indigo-400 mt-1">Developer Info</p>
              
            <div className="mt-5">
                <h3 className="text-l font-semibold text-indigo-400">Bio</h3>
                <p className="text-gray-600 mt-2">   Maddie (they/them) spends most of their time clacking away and trying to create something cool. Thanks for visiting their Snippet Poems app! Check out their<a href="https://github.com/maddieamie" className="text-purple-500 hover:text-purple-700 mx-3">GitHub</a>if you like. </p>
            </div>
        </div>
        <div className="max-w-lg mx-auto my-10 bg-green-100 rounded-lg shadow-md p-5">
            
                    <h2 className="text-center text-2xl text-teal-700 font-semibold mt-3">Snippet Poems</h2>
                    <p className="text-center text-indigo-400 mt-1">App Info</p>
                <div className="flex justify-center mt-5">
            <div className="mt-5">
                <h3 className="text-l font-semibold text-indigo-400">A place for people to chill & think.</h3>
                <p className="text-gray-600 mt-2">   Snippet Poems is a place for creative associations with a generated theme. This could be a place to write poetry or just generate new creative ideas through word association. It's a place to feel relaxed and unbothered by the world and hone in on your creative process. </p>
            </div>
            </div>
        </div>
   </div>
    )
  }
}

export default About;

