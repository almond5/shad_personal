export default function About() {
  return (
    <>
      <div
        id="about"
        style={{
          alignSelf: 'start',
          marginLeft: '20vw',
          marginTop: '20vh',
          height: '5vh',
        }}
      ></div>
      <div
        style={{
          display: 'flex',
          marginLeft: '30vw',
          maxWidth: '40%',
          flexDirection: 'column',
          alignContent: 'center',
          justifyContent: 'center',
          justifyItems: 'center',
          alignSelf: 'center',
          marginTop: '5vh',
          textAlign: 'left',
          marginBottom: '50vh',
        }}
      >
        About me
      </div>{' '}
    </>
  );
}
