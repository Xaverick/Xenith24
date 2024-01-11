import React, { useRef } from "react";
import treeLeft from '../../assets/tree-left.png';
import treeRight from '../../assets/tree-right.png';
import gateLeft from '../../assets/gate-left.png';
import gateRight from '../../assets/gate-right.png';
import grass from '../../assets/grass.png';
import './Banner.css';

const Banner = () => {
    const text = useRef();
    const treeLeftRef = useRef();
    const treeRightRef = useRef();
    const gateLeftRef = useRef();
    const gateRightRef = useRef();
    window.addEventListener('scroll', () => {
        let value = window.scrollY;

        text.current.style.marginTop = value * 2.5 + 'px';
        treeLeftRef.current.style.left = value * -1.5 + 'px';
        treeRightRef.current.style.left = value * 1.5 + 'px';
        gateLeftRef.current.style.left = value * 0.5 + 'px';
        gateRightRef.current.style.left = value * -0.5 + 'px';
    })
    return (
        <>
            <div className="parallax">
                <h2 id="text" ref={text}>Parallax Website</h2>
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
                    Optio, sit ex voluptatum ratione provident laboriosam ad blanditiis asperiores harum voluptas quis vitae iste dolor fugit id libero, molestias ipsum obcaecati quas exercitationem culpa. Veniam nihil placeat voluptates nisi!
                    Aliquid repellendus deserunt officia laboriosam pariatur, nobis illum architecto nostrum porro tenetur accusamus voluptates tempora facere cumque reiciendis voluptate eaque. Cumque dicta nulla dolorum voluptatum accusantium vero eligendi nostrum ut!
                    Repellendus animi ad, quam officiis architecto ipsa atque voluptates magnam, perspiciatis commodi explicabo tempora qui est, accusantium possimus quis a vel aliquam esse dignissimos! Quae consequatur illum ratione hic natus.
                    Necessitatibus natus expedita iste nulla, minus, laboriosam dicta non quos, nihil quidem est perferendis inventore ex nemo eligendi fugiat culpa saepe. Eligendi, ducimus? Similique, dolore quam molestiae incidunt ipsa quidem?
                    Ullam eos ducimus recusandae assumenda nesciunt facilis ipsum unde iste cupiditate. Expedita repellat, quisquam illo odit aut placeat repudiandae, nesciunt magni facere impedit excepturi praesentium consequatur libero rerum distinctio tenetur.
                    Consequatur perferendis facere architecto voluptas ipsum, beatae dolore repellat adipisci quidem quis nostrum, dolores enim. Aliquid impedit rerum quisquam harum alias, ipsum cupiditate doloribus repellendus incidunt aliquam, saepe quidem. Eligendi.
                    Beatae quia dolorem a culpa tenetur minus facilis impedit nostrum consequatur accusamus vitae possimus et enim, officiis neque at ea nihil! Quisquam eveniet vitae illum maxime eius, corrupti iste dolorum.
                    Amet quod vel repellat odit nostrum illo laboriosam sed quos dolor deleniti vitae maiores, quas accusantium odio dolorum laborum iusto ex perspiciatis. Vero accusantium porro blanditiis, ea dicta neque provident.
                    Ex perspiciatis dolor adipisci harum quos, eaque totam impedit incidunt. Laudantium maiores consequatur dolor. Totam repellat ratione cupiditate atque deserunt, aliquid dicta temporibus quia, nostrum eos eaque, quam porro? Libero!
                    Eaque similique excepturi, itaque ab fugit sapiente. At dolorum amet tempore facilis nostrum soluta, minus reiciendis sapiente minima error quo molestias deleniti natus dolore doloremque optio et quam repellendus fuga.
                    Ab voluptate laborum distinctio inventore dolor. Nihil soluta asperiores in ipsam non ex omnis labore dolores debitis, eveniet animi repellendus inventore! Quaerat iure corporis amet veniam, autem itaque labore beatae!
                    Praesentium hic laboriosam modi at facilis eveniet consequatur beatae ea et voluptatum facere eos explicabo quas itaque molestiae perspiciatis, doloremque dicta ullam asperiores commodi quos natus, totam quo aperiam! Molestias?
                    Possimus sit eaque delectus. Cupiditate culpa, illum nobis blanditiis iusto atque quam. Officia et iste unde, ea voluptate praesentium dolorem quibusdam facere similique alias nisi reprehenderit ab aliquid, nam explicabo.
                    Voluptatem ipsam dignissimos, accusamus magnam repellendus dicta totam illo accusantium autem pariatur! Rerum ab odio dolorem accusantium harum perferendis natus consequuntur illo tempora facilis cum adipisci aspernatur tempore, numquam dignissimos?
                    Iure reiciendis est pariatur eaque fugiat qui porro nobis modi labore, dicta dignissimos quasi quae recusandae fuga totam repellendus, corporis commodi incidunt quaerat dolorem nesciunt vel? Similique, ratione repellendus! Pariatur.
                    Dolor natus eius itaque ab ex perferendis repellat modi totam minima minus, praesentium amet laudantium ullam laboriosam facilis dolorum officia voluptatum quaerat earum laborum deleniti nesciunt similique consectetur sapiente! Sit.
                    Debitis nam quisquam necessitatibus neque inventore voluptatem aliquam quasi libero, ea iste in reprehenderit ipsam soluta modi aut, aspernatur recusandae repellendus possimus, obcaecati quam suscipit! Animi perferendis necessitatibus molestiae fugit!
                    Dolorem voluptates magnam saepe totam facilis facere ullam. Velit, placeat soluta. Dolores nam inventore explicabo? Eligendi cum eius eaque nemo architecto debitis impedit cumque illo voluptate, repellendus fugit perspiciatis expedita!
                    Officiis voluptatibus neque veritatis dicta sapiente beatae, ad dolorum perspiciatis pariatur atque consequatur laboriosam accusantium. Modi aut maiores beatae? Maxime saepe ad quo magni ut temporibus sed accusamus aperiam consequatur.
                    Sint possimus quis illo reiciendis atque quaerat cum quidem veniam, ex ducimus expedita maxime facere impedit aperiam magni iste tempore delectus laborum minima blanditiis iusto est harum. Ea, id dolore.
                    Numquam aperiam exercitationem, maiores accusamus animi obcaecati modi veniam laborum voluptas sit. Sint cupiditate, eveniet hic provident distinctio explicabo? Tempora eveniet porro nobis ea natus, doloribus praesentium recusandae veritatis quam.
                    Perferendis amet corrupti debitis magnam fuga placeat inventore vero nobis nihil soluta ullam esse eos nam maxime magni aperiam, corporis autem iste odio officiis commodi quia? Ducimus quaerat eius earum.
                    Veniam dolorem tempore reprehenderit corrupti ducimus voluptatum repellat voluptas magnam quidem aut, delectus alias veritatis, harum quam officia, ipsam dicta. Asperiores omnis numquam nesciunt. Qui hic asperiores praesentium officia rerum!
                    Corporis esse asperiores eius reiciendis nihil aliquid nobis, quam officiis laboriosam tempore molestias quos! Necessitatibus, alias assumenda, praesentium inventore corrupti eum sit cumque tempore suscipit consequatur itaque! Hic, ullam nisi.
                    Maxime vitae ea doloremque similique. Accusamus fugiat iste officia veritatis laborum pariatur possimus qui molestias tempore, cumque corporis sunt minus blanditiis id esse expedita numquam eveniet porro. Blanditiis, a enim?
                    Distinctio velit provident possimus ex exercitationem! Nihil vel inventore non quibusdam nam voluptas provident consequatur harum eveniet quisquam? Incidunt consequatur fugit rem quia ipsum error dicta recusandae nobis, assumenda atque.
                    Voluptatum ab nemo nisi doloribus odio harum aliquid illum unde vitae, velit quod, amet porro neque, praesentium repellat aut non ipsum consequuntur eligendi. Ut quibusdam culpa ipsum est, neque esse?
                    Similique et distinctio blanditiis commodi modi minus? Quam, eveniet assumenda cumque libero itaque nostrum excepturi earum esse amet voluptatibus voluptatum, nam sunt id expedita, saepe error odio blanditiis vel. Optio.
                    Ipsam eveniet cumque necessitatibus. Laborum magnam voluptas, maiores optio quidem voluptatibus a vitae voluptates ab obcaecati cum pariatur delectus quisquam, soluta repellendus aliquid deleniti aspernatur amet, quam illo. Eum, voluptatum.
                    Aliquam vel hic, pariatur debitis sint numquam fugiat ducimus possimus tempore officiis nisi, officia at sapiente. Laborum, vel? Odit, illum commodi. Quisquam dolore tempora suscipit laudantium dolorum, maiores distinctio iusto!
                    Blanditiis laborum eius modi nemo odit tenetur vitae asperiores voluptatum saepe, vero porro voluptate! Porro aliquam et fugit temporibus repellat! Ab atque blanditiis alias molestiae ipsa maiores eos sunt beatae.
                    Ullam impedit, at, aliquam, sed iure itaque neque porro consequuntur voluptatibus corporis placeat! Eius expedita dicta mollitia natus adipisci nulla dolorem doloribus quod id incidunt est perferendis deleniti, itaque sequi.
                    Repellat eligendi nesciunt blanditiis distinctio ullam possimus eaque commodi aspernatur dolore, reprehenderit tenetur? Repudiandae earum modi reiciendis exercitationem dicta quam natus, maiores facilis similique fugiat id expedita optio, culpa quaerat!
                    Sapiente dicta aspernatur fugiat. Atque quasi dolore, incidunt, numquam voluptatibus pariatur non voluptas suscipit ipsam ut qui architecto ab. Quo eveniet perferendis soluta vel, temporibus nesciunt officia vero incidunt est.
                    Nostrum totam nesciunt ipsa! Numquam at consectetur saepe nobis facilis quaerat consequuntur repellendus officia quod laborum id excepturi optio veritatis aut unde corporis rem, neque, a et ut. Earum, consequatur.
                    Quia atque est odio unde quam temporibus delectus vitae reiciendis veritatis nostrum voluptatem quos debitis perferendis alias sequi minus dolorem dolores voluptate incidunt quae labore itaque, dolor fugiat? Suscipit, delectus!
                    Nulla, ab a sit omnis tenetur aperiam laborum corporis suscipit perferendis quibusdam quisquam totam? Consequuntur ea laudantium ullam numquam amet molestias libero laboriosam placeat dicta, rerum tempora reprehenderit beatae odio.
                    Odio, ullam illo? Optio dolorem, sapiente neque beatae aspernatur fuga esse eius. Atque placeat at quibusdam, tenetur ducimus porro eius ut a soluta commodi dolor ipsa, veritatis voluptatibus ipsum? Consectetur!
                    Inventore at fugit veritatis, molestias in excepturi quod? Impedit itaque cupiditate modi, rerum numquam repellat expedita placeat perferendis sequi nostrum, sed recusandae deserunt vitae libero dolores incidunt natus optio eius!
                    Ut eveniet, maiores expedita necessitatibus quas sit magni cupiditate reprehenderit iusto unde accusamus quibusdam atque suscipit fuga facilis consectetur eligendi voluptates, excepturi nam, ducimus ea! Ea quas nulla ullam libero?</p>
            </div>
        </>
    )
}

export default Banner;