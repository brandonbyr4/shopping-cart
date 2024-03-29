import storeItems from '../data/items.json';
import { Row, Col } from 'react-bootstrap';
import { StoreItem } from '../components/storeitem';

export function Store () {
    return <div>
        <h1>store page</h1>
        <Row md={2} xs={1} lg={3} className="g-3">
            {storeItems.map(item => (
                <Col key={item.id}>
                    <StoreItem {...item} />
                </Col>
            ))}
        </Row>
    </div>
}