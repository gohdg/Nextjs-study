export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};
const Ninjas = (props) => {
  console.log(props);
  console.log(props.ninjas);
  // const ninjas = props.ninjas;
  const { ninjas } = props;
  const obj = {
    orange: [
      { id: 1, name: "오렌지" },
      { id: 2, name: "메실" },
      { id: 3, name: "사과" },
    ],

    apple: [
      { id: 1, name: "사과" },
      { id: 2, name: "구름" },
      { id: 3, name: "빵" },
    ],
  };
  console.log(obj);
  const { orange, apple } = obj;
  // console.log(aa);
  // console.log(bb);
  // const { orange, apple } = aa;

  console.log(orange);
  console.log(apple);

  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map((ninja) => (
        <div key={ninja.id}>
          <a>
            <h3>{ninja.name}</h3>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Ninjas;
