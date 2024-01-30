import styles from "../pages/About.module.css";

function About() {
  return (
    <div className={styles.about}>
      <h1>About Todo app</h1>
      <div>
      <h2>How Todo app works?</h2>
      <h3>ANS - You can type your work list in the input box and just click enter or add button to add your todos.</h3>
      </div>
      <div>
      <h2>What are the functions of this app?</h2>
      <h3>ANS - Major functons of this app are after adding your todos, you can update, delete and mark as completed your todos.</h3>
      </div>
      <div>
      <h2>How completed todos works?</h2>
      <h3>ANS - Inside completed todos, your all completed todos will be displayed which you mark as completed on the home page and there it will show your todo is crossed.</h3>
      </div>
      <div>
      <h2>What are the other functions?</h2>
      <h3>ANS - When you click on the clear all todos button, it will delete all the existing todos.</h3>
      </div>
    </div>
  )
}
export default About