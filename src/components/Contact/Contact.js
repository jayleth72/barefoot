import React from "react"
import Title from "../Title"
import styles from "../../css/contact.module.css"

const Contact = () => {
  return (
    <section className={styles.contact}>
      <Title title="Contact" subtitle="Us" />

      <div className={styles.center}>
        <div>
          <p>
            Feel free to get in touch with us!&nbsp;&nbsp;
            We'll do our best to get back to you ASAP.
          </p>
        </div>

        <form action="https://formspree.io/linda.letheby@gmail.com"
          method="POST"className={styles.form}>
          <div>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="your name"
            />
            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder="email@email.com"
            />
            <textarea
              name="message"
              id="message"
              rows="10"
              className={styles.formControl}
              placeholder="your message"
            />
          </div>
          <div>
            <div>
              <input
                type="submit"
                value="submit here"
                className={styles.submit}
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact