import React from 'react';
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import './Submit.css';
// TODO ISBN入力タグ追加
// TODO ISBN取得結果を書籍明入力タグに反映
// TODO 送信ボタンを押し、Appコンポーネントへデータ送信

function Submit(props) {
  // constructor(props) { 
  //   super(props)
  //   this.state = { message: 'something' }
  // }
  const textareaRef = React.useRef(null);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const submitTweet = React.useCallback(() => {
    if (textareaRef.current) {
      props.submitTweet({
        id: new Date().getTime(), // IDはユニークな値にする
        icon: '☠️', // このあたりの値は好きにしてください
        displayName: 'ミスター死',
        accountName: 'mrdeath',
        content: textareaRef.current.value
      });
      setIsOpen(false);
    }
  }, [textareaRef.current, props.addTweet]);

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <div className='modal'>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          className="Modal"
          overlayClassName="Overlay"
        >
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Modal title</p>
              <button className="delete" onClick={closeModal} aria-label="close"></button>
            </header>
            <section className="modal-card-body">
              content
                <textarea className="tweet-textarea" ref={textareaRef}></textarea>
            </section>
            <footer className="modal-card-foot">
              <button className="button is-success" onClick={submitTweet} >Save changes</button>
              <button className="button" onClick={closeModal}>Cancel</button>
            </footer>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Submit;