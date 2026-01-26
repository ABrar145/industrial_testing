import React, { useRef, useState } from "react";
import "./UploadPage.css";

export default function UploadPage() {

    const [file, setFile] = useState(null);
    const [clipsGenerated, setClipsGenerated] = useState(false);
    const fileInputRef = useRef(null);

    function filePic() {
        fileInputRef.current?.click();
    }
    


    function handleUpload(e) {
        setFile(e.target.files[0])
    }

    function handleRemove(){
        setFile(null);
        setClipsGenerated(false)

        if (fileInputRef.current) fileInputRef.current.value = "";
  

    }

    function handleGenerate() {
        setClipsGenerated(true)
    }


    return (
        <div className="page">
            <header>
            <div>StorySpan</div>
            
            </header>

            <main className="page">
                <h1>
                    Welcome back User!
                </h1>
                {!clipsGenerated && (
                    <>
                        <div>Upload video</div>
                        <button onClick={filePic}>Upload</button>
                        <div>
                            <label>Upload
                                <input ref={fileInputRef} type="file" accept="video/*" hidden onChange={handleUpload} />
                            </label>
                        </div>
                   



                {file && (
                    <div>
                        <span>{file.name}</span>

                        <div>
                            <button onClick={handleRemove}>Remove</button>
                            <button onClick={handleGenerate}>Generate</button>
                        </div>
                    </div>
                )}
                    </>

                )}

                {clipsGenerated && (
                    <>
                        <div>My clips</div>

                        {[1, 2].map((clip) => (
                            <div key={clip}>
                                <button>
                                    Share
                                </button>
                                <button>Download</button>
                            </div>

                        ))}
                    </>
                )}
                
                
                 
            </main>
        </div>
    );
}