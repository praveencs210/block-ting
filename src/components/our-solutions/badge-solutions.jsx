import Badge from "../badge";

function BadgeSolutions() {
    const badgeData = [
        {
            id: 1,
            name: "Product Growth"
        },
        {
            id: 2,
            name: "Marketing Stratergy"
        },
        {
            id: 3,
            name: "Branding"
        },
        {
            id: 4,
            name: "New Product"
        }
    ]
    return <>
      <Badge badge={badgeData}/>
    </>
}

export default BadgeSolutions;