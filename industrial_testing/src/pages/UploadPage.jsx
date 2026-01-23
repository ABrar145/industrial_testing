import React from "react";

export default function UploadPage() {
    return (
        <div className="page">
            <header>
            <div>StorySpan</div>
            
            </header>

            <main>
                <h1>
                    Welcome back User!
                </h1>
                <div>Upload video</div>
                <div>
                    <label>Upload
                        <input type="file" accept="video/*" />
                    </label>
                </div>



                <div>
                    <span>{File.name}</span>

                    <div>
                        <button>Remove</button>
                        <button>Generate</button>
                    </div>
                </div>


                
            </main>
        </div>
    );
}