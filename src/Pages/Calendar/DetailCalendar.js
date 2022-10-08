function DetailCalendar({ DetailData, date }) {
  const feedsData = {
    labels: DetailData?.feeds?.map(x => x.created_at),
  };
  console.log(feedsData);
  return (
    <>
      <div>DetailCalendar</div>
      {/* <div>{feedsData}</div> */}
    </>
  );
}
export default DetailCalendar;
