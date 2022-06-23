export function Title(props: { title: string }) {
  console.log(props);
  return <h1 style={{ color: 'red' }}>{props.title}</h1>;
}
