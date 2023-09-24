import { useState, useRef } from "react";
import * as S from "./Contact.styles";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [contactsData, setContactsData] = useState({
    name: "",
    email: "",
    message: "",
    checkedTerms: false,
  });

  const [emptyInputs, setEmptyInputs] = useState(false);
  const [succesSendForm, setSuccesSendForm] = useState(false);
  const [errorSendForm, setErrorSendForm] = useState(false);

  const form = useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    //validar data
    if (
      contactsData.name === "" ||
      contactsData.email === "" ||
      contactsData.message === "" ||
      contactsData.checkedTerms === false
    ) {
      setEmptyInputs(true);
    } else {
      emailjs
        .sendForm(
          import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_REACT_APP_EMAILJS_PUBLIC_USER_ID
        )
        .then(
          (result) => {
            setSuccesSendForm(true);
          },
          (error) => {
            setErrorSendForm(true);
          }
        );

      setEmptyInputs(false);
    }
  };

  return (
    <S.ContainerContact id="contact">
      <S.Title>Contáctame</S.Title>
      <S.ContainerForm>
      
      <S.TextSucces>

        {succesSendForm ? (
          <p>Enviado con éxito</p>
        ) : (
          <S.Form onSubmit={onSubmit} ref={form}>
            <S.InputForm
              placeholder="Tu nombre"
              type="text"
              name="name"
              required={false}
              onChange={(e) =>
                setContactsData({ ...contactsData, name: e.target.value })
              }
              value={contactsData.name}
            />
            <S.InputForm
              placeholder="Tu Email"
              type="email"
              name="email"
              required={true}
              onChange={(e) =>
                setContactsData({ ...contactsData, email: e.target.value })
              }
              value={contactsData.email}
            />
            <S.TextArea
              placeholder="Escribe tu mensaje"
              name="message"
              onChange={(e) =>
                setContactsData({ ...contactsData, message: e.target.value })
              }
              value={contactsData.message}
            />
            <S.ContainerConditions>
              <input
                type="checkbox"
                onChange={(e) =>
                  setContactsData({
                    ...contactsData,
                    checkedTerms: e.target.checked,
                  })
                }
              />
              <span>Acepto los términos y condiciones</span>
            </S.ContainerConditions>
            {contactsData.checkedTerms && (
              <S.Button type="submit">Enviar</S.Button>
            )}
          </S.Form>
        )}
      </S.TextSucces>

        {emptyInputs && (
          <p>
            Debes rellenar todos los campos y aceptar los términos y
            condiciones
          </p>
        )}

        <S.TextError>
        {errorSendForm &&(
          <p>
            Hubo un error mientras se enviaba el mensaje. Puede intentar más tarde
          </p>
        )}
        </S.TextError>

      </S.ContainerForm>
    </S.ContainerContact>
  );
};

export default Contact;
