import { Link } from "react-router-dom";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../App";
import { useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const MessageDetail = () => {
  const userData: any = useLoaderData();
  const { slug }: any = useParams();
  const navigate = useNavigate();

  const delHandler = async () => {
    await deleteDoc(doc(db, `${import.meta.env.VITE_COLLECTION}`, slug));
    toast("Message deleted successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigate("/message");
  };

  return (
    <>
      <div className="detail-page">
        <div>
          <div className="text-center my-3">
            <Link className="btn btn-outline-info" to="/message">
              Messages
            </Link>
          </div>
          <div className="detail-card">
            <div className="row-item">
              <h2>Name:</h2>
              <div className="value">{userData.name}</div>
            </div>
            <div className="divider"></div>
            <div className="row-item">
              <h2>Email:</h2>
              <div className="value">{userData.email}</div>
            </div>

            <div className="divider"></div>
            <div className="row-item">
              <h2>Phone No:</h2>
              <div className="value">
                {!userData.phone_no ? "N/A" : userData.phone_no}
              </div>
            </div>

            <div className="divider"></div>
            <div className="row-item">
              <h2>Message:</h2>
              <div className="value">
                {!userData.message ? "Message not available" : userData.message}
              </div>
            </div>

            <div className="divider"></div>

            <button onClick={delHandler}>Delete</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageDetail;

export const fetchSingleQuote = async ({ params }: any) => {
  const docRef = doc(db, `${import.meta.env.VITE_COLLECTION}`, params.slug);
  const postSnapshot = getDoc(docRef);

  try {
    const val = postSnapshot.then((doc) => {
      const res = doc.data();
      return res;
    });
    return val;
  } catch (error: any) {
    throw Error(error.Message);
  }
};
