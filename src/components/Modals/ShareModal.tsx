
import toast from "react-hot-toast";
import { FaCopy } from "react-icons/fa";


interface ModalProps {
    open: boolean;
    onClose: () => void;
    shareUrl:string
}


export function ShareModal({open ,onClose,shareUrl}:ModalProps){


  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl)
      .then(() => {
        toast.success("Link Copied",{duration:3000,position:'top-center',
            style: {
                background: '#363636',
                color: '#fff',
              },
        })
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

    return<>
     {open&& <div onClick={onClose} className="fixed inset-0 z-[1000] grid place-items-center overflow-auto bg-opacity-90 h-screen w-full backdrop-blur-sm transition-all duration-300">

          <div onClick={(e)=>e.stopPropagation()} className="bg-black p-4 max-w-[250px] m-4  border rounded-lg">
            

          <div className="flex items-center justify-between gap-4">
            <input
              type="text"
              value={shareUrl}
              readOnly
              className="border rounded p-1 w-full text-gray-700"
            />
            <button
            onClick={()=>handleCopyToClipboard()}
              
              className="px-2 py-2 text-orange-500 text-[30px] hover:text-orange-700 rounded"
            >
             <FaCopy />
            </button>
          </div>
          </div>
    </div>}
    </>
}