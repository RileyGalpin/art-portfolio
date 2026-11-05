import { SITE } from '../data/artworks';

export default function Contact() {
  return (
    <main className="page contact">
      <h1>Contact</h1>
      <p className="prose">
        For purchases, commissions, exhibitions, or press, write to{' '}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or use the form.
      </p>
      <hr className="stitch" />
      <div className="contact-cols">
        <form action={SITE.formUrl} method="POST">
          <h2>Send a message</h2>
          <label>Name<input name="name" required autoComplete="name" /></label>
          <label>Email<input type="email" name="email" required autoComplete="email" /></label>
          <label>Reason for writing
            <select name="inquiry_type">
              <option>General question</option>
              <option>Commission inquiry</option>
              <option>Purchase inquiry</option>
              <option>Exhibition or press</option>
            </select>
          </label>
          <label>Message<textarea name="message" rows="6" required /></label>
          <label>For commissions: size, subject, and timeline
            <textarea name="commission_details" rows="3" />
          </label>
          <button className="btn" type="submit">Send message</button>
        </form>

        <div>
          <form action={SITE.newsletterUrl} method="POST">
            <h2>Newsletter</h2>
            <p>New work and show announcements. No spam.</p>
            <label>Email<input type="email" name="email" required autoComplete="email" /></label>
            <button className="btn" type="submit">Join the newsletter</button>
          </form>
          <h2>Follow along</h2>
          <ul className="links">
            <li><a href={SITE.instagram} target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href={SITE.tiktok} target="_blank" rel="noreferrer">TikTok</a></li>
          </ul>
        </div>
      </div>
    </main>
  );
}