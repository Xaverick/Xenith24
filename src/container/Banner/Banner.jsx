import { useRef } from "react";
import treeLeft from '../../assets/tree-left.png';
import treeRight from '../../assets/tree-right.png';
import gateLeft from '../../assets/gate-left.png';
import gateRight from '../../assets/gate-right.png';
import grass from '../../assets/grass.png';
import './Banner.css';

const Banner = () => {
    const textRef = useRef();
    const treeLeftRef = useRef();
    const treeRightRef = useRef();
    const gateLeftRef = useRef();
    const gateRightRef = useRef();
    window.addEventListener('scroll', () => {
        let value = window.scrollY;

        if (value < 1000) {
            textRef.current.style.marginTop = value * 2.5 + 'px';
            treeLeftRef.current.style.left = value * -1.5 + 'px';
            treeRightRef.current.style.left = value * 1.5 + 'px';
            gateLeftRef.current.style.left = value * 0.5 + 'px';
            gateRightRef.current.style.left = value * -0.5 + 'px';
        }
    })
    return (
        <>
            <div className="parallax">
                <h2 id="text" ref={textRef}>Parallax Website</h2>
                <img src={treeLeft} ref={treeLeftRef} alt="" id="tree-left" />
                <img src={treeRight} ref={treeRightRef} alt="" id="tree-right" />
                <img src={gateLeft} ref={gateLeftRef} alt="" id="gate-left" />
                <img src={gateRight} ref={gateRightRef} alt="" id="gate-right" />
                <img src={grass} alt="" id="grass" />
            </div>
            <div className="sec">
                <h2>Parllax scrolling website</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati id repellat dolorum deleniti ipsa atque repellendus harum, eveniet voluptatum facere dolore ipsam iure expedita accusamus, possimus, culpa ex voluptas quam.
                    Magnam totam modi error voluptatem ipsam ea libero, eius dolores soluta sequi fugiat repudiandae ipsa ratione maxime ducimus atque dolorem numquam aliquam eum eaque corporis temporibus assumenda omnis culpa! Magni?
                    Mollitia dolores ducimus aliquid nesciunt eius. Tenetur tempora similique, dolor voluptatem obcaecati nostrum sint! Provident saepe fugit delectus officiis assumenda! Omnis modi ad cumque deleniti sit enim sed maiores? Corrupti?
                    A quos distinctio minima nihil, quidem, reprehenderit delectus ipsam ut tempora ullam esse hic accusamus. Earum, rem? Eum fuga laborum nobis rerum temporibus! Itaque laboriosam nam recusandae quis odit enim?
                    Accusamus ea qui quidem hic animi voluptatem expedita rem omnis voluptate enim, impedit, aspernatur accusantium necessitatibus? Delectus voluptatibus eum esse? Magni consectetur nesciunt consequuntur fugit nulla, magnam assumenda sint facere?
                    Debitis nam ipsum atque soluta quis nulla reiciendis ad animi commodi explicabo, recusandae aliquid aut quasi corporis perspiciatis porro similique quia at placeat ratione omnis temporibus ipsa! Delectus, veniam impedit!
                    Amet ducimus quos quae tenetur totam voluptates, accusantium alias, enim qui non aliquam delectus quas natus perferendis minus temporibus itaque inventore eum odit? Aliquam doloribus explicabo illum dolorem saepe nemo?
                    Vel molestiae optio mollitia esse dolores alias? Corrupti quibusdam facere deserunt nesciunt, sit illum consectetur dolorum voluptatem optio ab, eveniet, delectus labore laudantium doloribus praesentium atque ratione corporis sunt! Laudantium.
                    Blanditiis sequi minus corrupti magnam, expedita ut beatae cumque harum illum rerum placeat iste natus pariatur ex aut quo voluptas nobis vero accusantium porro quasi modi distinctio esse! Earum, autem?
                    Praesentium enim quod facere adipisci at dolore ratione ipsa sapiente eaque sint nostrum neque dolores vitae dignissimos, culpa fuga laudantium ad optio amet, quam totam corrupti. Nisi fuga cumque possimus!
                    rerum numquam repellat expedita placeat perferendis sequi nostrum, sed recusandae deserunt vitae libero dolores incidunt natus optio eius!
                    Ut eveniet, maiores expedita necessitatibus quas sit magni cupiditate reprehenderit iusto unde accusamus quibusdam atque suscipit fuga facilis consectetur eligendi voluptates, excepturi nam, ducimus ea! Ea quas nulla ullam libero?</p>
            </div>
        </>
    )
}

export default Banner;



