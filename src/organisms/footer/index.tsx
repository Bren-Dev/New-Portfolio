import ElementSpacial from "assets/icons/elementSpacial";
import EmailIcon from "assets/icons/email";
import * as S from "./styles";
import React, { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";
const FORM_ID = "BzHwsPBB";
export default function Footer() {
  const [submit, submitting] = useFormspark({
    formId: FORM_ID,
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const onSubmit = async (e: any) => {
    e.preventDefault();
    await submit({ name, message });
    alert("Form submitted");
  };

  return (
    <S.Container>
      <S.ContentDivForm>
        <S.DivForm>
          <S.DivTouch>
            <h1>Get in touch</h1>

            <p>
              I’m very approachable and would love to speak to you. Feel free to
              send me an email. Follow me in social media or simply complete the
              enquiry form.
            </p>
            <S.DivEmail>
              <EmailIcon />
              <span>brenda_nogueira_pe@hotmail.com</span>
            </S.DivEmail>
          </S.DivTouch>
          <S.DivMessage>
            <h1>Send me a message</h1>
            <form id="formMessage" onSubmit={onSubmit}>
              <input
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit" disabled={submitting}>
                Send
              </button>
            </form>
          </S.DivMessage>
        </S.DivForm>
      </S.ContentDivForm>
      <S.DivFinal>
        <ElementSpacial />
      </S.DivFinal>
    </S.Container>
  );
}
