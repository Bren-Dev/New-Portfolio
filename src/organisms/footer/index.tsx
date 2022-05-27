import ElementSpacial from "../../assets/icons/elementSpacial";
import EmailIcon from "../../assets/icons/email";
import * as S from "./styles";
export default function Footer() {
  return (
    <S.Container>
      <S.ContentDivForm>
        <S.DivForm>
          <S.DivTouch>
            <h1>Get in touch</h1>

            <p>
              I’m very approachable and would love to speak to you. Feel free to
              call, send me an email . Follow me in social media or simply
              complete the enquiry form.
            </p>
            <S.DivEmail>
              <EmailIcon />
              <span>brenda_nogueira_pe@hotmail.com</span>
            </S.DivEmail>
          </S.DivTouch>
          <S.DivMessage>
            <h1>Send me a message</h1>
            <form>
              <input placeholder="Name" type="text" />
              <input placeholder="Email Adress" type="text" />
              <input placeholder="Subject" type="text" />
              <input placeholder="Your Message" type="text" />
            </form>
            <S.DivButton>
              <button>Send Message</button>
            </S.DivButton>
          </S.DivMessage>
        </S.DivForm>
      </S.ContentDivForm>
      <S.DivFinal>
        <ElementSpacial />
      </S.DivFinal>
    </S.Container>
  );
}
