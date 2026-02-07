// Base de données des questions CCNA 1 ITNv7
const questionsDB = [
    {
        id: 1,
        question: "Un administrateur a défini un compte d'utilisateur local avec un mot de passe secret sur le routeur R1 pour être utilisé avec SSH. Quelles sont les trois étapes supplémentaires nécessaires pour configurer R1 pour accepter uniquement les connexions SSH chiffrées ?",
        options: [
            "Activez les sessions SSH entrantes à l'aide des commandes de ligne VTY.",
            "Configurer le nom de domaine IP.",
            "Générez des clés pré-partagées bidirectionnelles.",
            "Configurez DNS sur le routeur.",
            "Activez les sessions Telnet entrantes à l'aide des commandes de ligne VTY.",
            "Générer les clés SSH."
        ],
        correctAnswers: [0, 1, 5],
        type: "multiple",
        explanation: "Pour configurer SSH, il faut configurer le nom de domaine IP, générer les clés SSH et activer les sessions SSH sur les lignes VTY."
    },
    {
        id: 2,
        question: "Que sont les protocoles propriétaires ?",
        options: [
            "Des protocoles qui peuvent être librement utilisés par toute entreprise ou tout fournisseur",
            "Un ensemble de protocoles connus sous le nom de suite de protocoles TCP/IP",
            "Des protocoles développés par des entreprises qui contrôlent leur définition et leur fonctionnement",
            "Des protocoles développés par des organismes privés pour fonctionner avec du matériel provenant de tout fournisseur"
        ],
        correctAnswers: [2],
        type: "single",
        explanation: "Les protocoles propriétaires ont leur définition et leur fonctionnement contrôlés par une entreprise ou un fournisseur."
    },
    {
        id: 3,
        question: "Un administrateur réseau ajoute un nouveau réseau local à une filiale. Le nouveau réseau local doit prendre en charge 4 périphériques connectés. Quel est le plus petit masque réseau que l'administrateur réseau peut utiliser pour le nouveau réseau?",
        options: [
            "255.255.255.224",
            "255.255.255.248",
            "255.255.255.128",
            "255.255.255.192"
        ],
        correctAnswers: [1],
        type: "single",
        explanation: "Un masque /29 (255.255.255.248) offre 6 adresses hôtes utilisables, suffisant pour 4 périphériques."
    },
    {
        id: 4,
        question: "À quoi sert le glissement de fenêtre TCP ?",
        options: [
            "À mettre fin à une communication une fois la transmission des données complète",
            "À demander à une source de réduire la vitesse à laquelle elle transmet les données",
            "À informer une source qu'elle doit retransmettre les données à partir d'un point particulier",
            "À s'assurer que les segments parviennent à la destination dans l'ordre"
        ],
        correctAnswers: [1],
        type: "single",
        explanation: "Le mécanisme de glissement de fenêtre TCP permet à un périphérique de destination de demander à une source de ralentir la transmission."
    },
    {
        id: 5,
        question: "Des données sont envoyées depuis un ordinateur source vers un serveur de destination. Quelles sont les trois affirmations qui décrivent la fonction TCP ou UDP dans cette situation ?",
        options: [
            "Le champ Port source identifie l'application ou le service actif qui traitera les données renvoyées à l'ordinateur.",
            "Le processus TCP exécuté sur l'ordinateur sélectionne le port de destination de façon aléatoire lors de l'établissement d'une session via le serveur.",
            "Des segments UDP sont encapsulés dans des paquets IP pour le transport via le réseau.",
            "Le numéro de port source TCP identifie l'hôte émetteur sur le réseau.",
            "Le numéro de port de destination UDP identifie l'application ou le service du serveur destiné au traitement des données.",
            "TCP est le protocole le plus adapté lorsqu'une fonction requiert une surcharge réseau plus faible."
        ],
        correctAnswers: [0, 2, 4],
        type: "multiple",
        explanation: "Les numéros de port de couche 4 identifient l'application ou le service qui gérera les données."
    },
    {
        id: 6,
        question: "Un serveur reçoit un paquet client. Le numéro de port de destination du paquet est 69. Quelle application de service le client demande-t-il?",
        options: [
            "DNS",
            "SMTP",
            "TFTP",
            "DHCP"
        ],
        correctAnswers: [2],
        type: "single",
        explanation: "Le port 69 est utilisé par TFTP (Trivial File Transfer Protocol)."
    },
    {
        id: 7,
        question: "Quelle caractéristique décrit un cheval de Troie?",
        options: [
            "Logiciel ou code malveillant s'exécutant sur un périphérique final",
            "L'utilisation d'informations d'identification volées pour accéder à des données privées",
            "Une attaque qui ralentit ou bloque un périphérique ou un service réseau",
            "Un périphérique réseau qui filtre l'accès et le trafic entrant dans un réseau"
        ],
        correctAnswers: [0],
        type: "single",
        explanation: "Un cheval de Troie est un logiciel malveillant qui se fait passer pour un programme légitime."
    },
    {
        id: 8,
        question: "Quels sont les deux problèmes qui peuvent être causés par un grand nombre de requêtes ARP et de messages de réponse?",
        options: [
            "Les commutateurs sont surchargés car ils concentrent tout le trafic des sous-réseaux connectés.",
            "Tous les messages de requête ARP doivent être traités par tous les nœuds du réseau local.",
            "Le réseau peut être saturé car les messages de réponse ARP ont une charge utile très importante.",
            "La requête ARP est envoyée en tant que diffusion et inondera l'ensemble du sous-réseau.",
            "Un grand nombre de messages de requête et de réponse ARP peuvent ralentir le processus de commutation."
        ],
        correctAnswers: [1, 3],
        type: "multiple",
        explanation: "Les requêtes ARP sont envoyées sous forme de diffusion et tous les nœuds les recevront."
    },
    {
        id: 9,
        question: "Quelle commande peut être utilisée sur un PC Windows pour afficher la configuration IP de cet ordinateur ?",
        options: [
            "ipconfig",
            "ping",
            "show ip interface brief",
            "show interfaces"
        ],
        correctAnswers: [0],
        type: "single",
        explanation: "La commande ipconfig affiche la configuration IP sur Windows."
    },
    {
        id: 10,
        question: "Comment la commande service password-encryption améliore-t-elle la sécurité des mots de passe sur des routeurs et des commutateurs Cisco ?",
        options: [
            "Elle demande à l'utilisateur d'entrer des mots de passe chiffrés pour obtenir un accès à la console.",
            "Elle nécessite que des mots de passe soient utilisés lors d'une connexion distante avec Telnet.",
            "Elle chiffre les mots de passe qui sont stockés dans des fichiers de configuration de routeur et de commutateur.",
            "Elle chiffre les mots de passe lorsqu'ils sont transmis sur le réseau."
        ],
        correctAnswers: [2],
        type: "single",
        explanation: "La commande service password-encryption crypte les mots de passe en clair dans le fichier de configuration."
    },
    {
        id: 11,
        question: "Quel mécanisme est utilisé par un routeur pour empêcher un paquet IPv4 reçu de voyager sans fin sur un réseau ?",
        options: [
            "Il décrémente la valeur du champ TTL de 1 et si le résultat est 0, il rejette le paquet et envoie un message 'Time Exceeded'.",
            "Il vérifie la valeur du champ TTL et si elle est égale à 0, il rejette le paquet et envoie un message 'Destination Unreachable'.",
            "Il incrémente la valeur du champ TTL de 1 et si le résultat est 100, il rejette le paquet.",
            "Il vérifie la valeur du champ TTL et si elle est égale à 100, il rejette le paquet."
        ],
        correctAnswers: [0],
        type: "single",
        explanation: "Le routeur décrémente le TTL de 1 à chaque saut. Quand TTL atteint 0, le paquet est rejeté."
    },
    {
        id: 12,
        question: "Quel service est fourni par HTTPS?",
        options: [
            "Utilise le cryptage pour sécuriser l'échange de texte, d'images graphiques, de sons et de vidéos sur le Web.",
            "Traduit des noms de domaines en adresses IP",
            "Permet l'accès à distance aux périphériques et serveurs réseau.",
            "Utilise le chiffrement pour fournir un accès distant sécurisé aux périphériques et serveurs réseau."
        ],
        correctAnswers: [0],
        type: "single",
        explanation: "HTTPS utilise le chiffrement SSL/TLS pour sécuriser les communications web."
    },
    {
        id: 13,
        question: "Quelles sont les deux déclarations qui décrivent les caractéristiques d'une table de routage IPv4 sur un routeur ?",
        options: [
            "La table de routage répertorie les adresses MAC de chaque interface active.",
            "Il stocke des informations sur les chemins dérivés des interfaces de routeur actives.",
            "Si une route statique par défaut est configurée, une entrée sera incluse dans la table de routage avec le code source S.",
            "S'il existe deux ou plusieurs chemins possibles, le chemin avec la valeur métrique la plus élevée est inclus.",
            "Les interfaces connectées directement ont deux codes d'origine: C et S.",
            "La commande netstat -r permet d'afficher la table de routage de l'hôte."
        ],
        correctAnswers: [1, 5],
        type: "multiple",
        explanation: "La table de routage stocke les informations sur les chemins et peut être affichée avec netstat -r sur l'hôte."
    },
    {
        id: 14,
        question: "Quelle valeur, qui se trouve dans un champ d'en-tête IPv4, est diminuée par chaque routeur qui reçoit un paquet ?",
        options: [
            "Décalage du fragment",
            "Time To Live (durée de vie)",
            "Longueur d'en-tête",
            "Services différenciés"
        ],
        correctAnswers: [1],
        type: "single",
        explanation: "Le champ TTL est décrémenté de 1 par chaque routeur."
    },
    {
        id: 15,
        question: "La commande de configuration globale ip default-gateway 172.16.100.1 est appliquée sur un commutateur. Quel est l'effet de cette commande?",
        options: [
            "Le commutateur est limité à l'envoi et à la réception de trames vers et depuis la passerelle.",
            "Le commutateur aura une interface de gestion avec l'adresse 172.16.100.1.",
            "Le commutateur peut communiquer avec d'autres hôtes du réseau 172.16.100.0.",
            "Le commutateur peut être géré à distance à partir d'un hôte sur un autre réseau."
        ],
        correctAnswers: [3],
        type: "single",
        explanation: "Une adresse de passerelle par défaut permet au commutateur de communiquer avec des réseaux distants."
    },
    {
        id: 16,
        question: "Quelle méthode est utilisée pour gérer l'accès avec gestion des conflits sur un réseau sans fil ?",
        options: [
            "Classement des priorités",
            "CSMA/CD",
            "Passage de jeton",
            "CSMA/CA"
        ],
        correctAnswers: [3],
        type: "single",
        explanation: "CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance) est utilisé pour les réseaux sans fil."
    },
    {
        id: 17,
        question: "Parmi les caractéristiques suivantes, lesquelles sont des caractéristiques du processus CSMA/CD ?",
        options: [
            "Un signal d'encombrement indique que la collision a été résolue.",
            "Tous les périphériques d'un segment ont accès aux données transitant par le support réseau.",
            "Les périphériques peuvent se voir attribuer une priorité de transmission supérieure.",
            "Suite à la détection d'une collision, les hôtes peuvent tenter de reprendre leur transmission après un délai aléatoire.",
            "Le périphérique doté d'un jeton électronique est le seul autorisé à transmettre après une collision.",
            "Un périphérique est à l'écoute du support et attend qu'il ne soit plus occupé pour pouvoir transmettre."
        ],
        correctAnswers: [1, 3, 5],
        type: "multiple",
        explanation: "CSMA/CD implique l'écoute du support, l'accès partagé et la retransmission après un délai aléatoire."
    },
    {
        id: 18,
        question: "Quel champ de trame est créé par un nœud source et utilisé par un nœud de destination pour s'assurer qu'un signal de données transmis n'a pas été modifié ?",
        options: [
            "Champ Séquence de contrôle de trame",
            "Champ de processus de correction d'erreur",
            "Protocole UDP",
            "Champ de contrôle de flux",
            "Champ de vérification des erreurs de couche de transport"
        ],
        correctAnswers: [0],
        type: "single",
        explanation: "Le FCS (Frame Check Sequence) permet de détecter les erreurs de transmission."
    },
    {
        id: 19,
        question: "Quelle technologie sans fil a des besoins en termes de consommation d'énergie et de débit qui la rendent populaire dans les applications domotiques ?",
        options: [
            "Wi-Fi",
            "LoRaWAN",
            "5G",
            "ZigBee"
        ],
        correctAnswers: [3],
        type: "single",
        explanation: "ZigBee est conçu pour les applications IoT à faible consommation et faible débit."
    },
    {
        id: 20,
        question: "Un administrateur réseau conçoit la structure d'un nouveau réseau sans fil. Quels points problématiques doivent être pris en compte lors de la conception ?",
        options: [
            "Câblage étendu",
            "Collision de paquet",
            "Options de mobilité",
            "Zone de couverture",
            "Perturbation",
            "Sécurité"
        ],
        correctAnswers: [3, 4, 5],
        type: "multiple",
        explanation: "Les considérations principales pour un réseau sans fil incluent la couverture, les perturbations et la sécurité."
    },
    {
        id: 21,
        question: "Un administrateur réseau souhaite avoir le même masque de sous-réseau pour tous les réseaux d'un petit site. Le site a les réseaux suivants: Téléphones IP – 22 adresses, PC – 20 adresses, Imprimantes – 2 adresses, Scanners – 2 adresses. Quel masque de sous-réseau permettrait d'utiliser de manière optimale les adresses disponibles ?",
        options: [
            "255.255.255.224",
            "255.255.255.252",
            "255.255.255.248",
            "255.255.255.192",
            "255.255.255.0",
            "255.255.255.240"
        ],
        correctAnswers: [0],
        type: "single",
        explanation: "Le masque /27 (255.255.255.224) offre 30 adresses hôtes, suffisant pour le plus grand sous-réseau de 22."
    },
    {
        id: 22,
        question: "Les utilisateurs se plaignent de délais allongés lors de l'authentification à certains moments de la semaine. Quel type d'information les ingénieurs réseau doivent-ils vérifier ?",
        options: [
            "Les enregistrements et messages syslog",
            "Le résultat de la commande debug et les captures de paquets",
            "Les performances de référence du réseau",
            "Les fichiers de configuration réseau"
        ],
        correctAnswers: [2],
        type: "single",
        explanation: "Les performances de référence permettent de comparer le comportement normal du réseau."
    },
    {
        id: 23,
        question: "Quels sont les trois utilitaires et commandes Windows qui fourniront les informations nécessaires pour vérifier la configuration IP, DNS et la connectivité au routeur ?",
        options: [
            "telnet",
            "ipconfig",
            "tracert",
            "netsh interface ipv6 show neighbor",
            "ping",
            "arp -a",
            "nslookup"
        ],
        correctAnswers: [1, 4, 6],
        type: "multiple",
        explanation: "ipconfig, ping et nslookup sont essentiels pour le dépannage réseau de base."
    },
    {
        id: 24,
        question: "Quel type de serveur s'appuie sur des types d'enregistrements tels que A, NS, AAAA et MX pour fournir des services?",
        options: [
            "DNS",
            "Web",
            "Fichier",
            "E-mails"
        ],
        correctAnswers: [0],
        type: "single",
        explanation: "Le serveur DNS utilise ces types d'enregistrements pour la résolution de noms."
    },
    {
        id: 25,
        question: "Un technicien réussit à envoyer une requête ping pour l'adresse IP du serveur mais pas pour l'URL. Quelle commande doit-il exécuter pour diagnostiquer ce problème ?",
        options: [
            "tracert",
            "nslookup",
            "ipconfig",
            "netstat"
        ],
        correctAnswers: [1],
        type: "single",
        explanation: "nslookup permet de tester la résolution DNS."
    },
    {
        id: 26,
        question: "Quel avantage présente l'utilisation du cloud computing dans les réseaux ?",
        options: [
            "Les utilisateurs finaux sont libres d'utiliser leurs propres outils pour accéder aux informations.",
            "Les technologies sont intégrées à des appareils pour les rendre plus intelligents.",
            "L'entreprise améliore les capacités de son réseau sans investissement supplémentaire en infrastructure.",
            "Un réseau domestique utilise le câblage électrique existant."
        ],
        correctAnswers: [2],
        type: "single",
        explanation: "Le cloud computing permet d'étendre les capacités sans investissement majeur en infrastructure."
    },
    {
        id: 27,
        question: "Quelles sont les fonctions d'ARP ?",
        options: [
            "Lorsqu'un hôte encapsule un paquet dans une trame, il fait référence à la table des adresses MAC.",
            "Si le périphérique qui reçoit une requête ARP dispose de l'adresse IPv4 de destination, il renvoie une réponse ARP.",
            "Si un hôte est prêt à envoyer un paquet local et n'a pas l'adresse MAC, il génère une diffusion ARP.",
            "Si aucun périphérique ne répond, le noeud d'origine diffuse le paquet de données.",
            "Une requête ARP est envoyée à tous les périphériques et contient l'adresse IP de l'hôte de destination."
        ],
        correctAnswers: [1, 2],
        type: "multiple",
        explanation: "ARP permet de résoudre les adresses IP en adresses MAC via des diffusions."
    },
    {
        id: 28,
        question: "Quelles couches du modèle OSI équivalent à la couche application du modèle TCP/IP ?",
        options: [
            "Réseau",
            "Application",
            "Transport",
            "Session",
            "Présentation",
            "Liaison de données"
        ],
        correctAnswers: [1, 3, 4],
        type: "multiple",
        explanation: "Les couches application, présentation et session du modèle OSI correspondent à la couche application TCP/IP."
    },
    {
        id: 29,
        question: "Quel service est fourni par Internet Messenger ?",
        options: [
            "Traduit des noms de domaines en adresses IP",
            "Utilise le chiffrement pour fournir un accès distant sécurisé",
            "Une application qui permet les discussions en ligne en temps réel",
            "Permet l'accès à distance aux périphériques et serveurs réseau"
        ],
        correctAnswers: [2],
        type: "single",
        explanation: "La messagerie instantanée permet les discussions en temps réel."
    },
    {
        id: 30,
        question: "Quelles commandes peuvent être utilisées sur un hôte Windows pour afficher la table de routage ?",
        options: [
            "netstat -r",
            "show ip route",
            "route print",
            "tracert",
            "netstat -s"
        ],
        correctAnswers: [0, 2],
        type: "multiple",
        explanation: "Sur Windows, route print et netstat -r affichent la table de routage."
    },
    {
        id: 31,
        question: "Quel scénario décrit une fonction fournie par la couche transport ?",
        options: [
            "La couche transport formate l'écran pour que la page Web s'affiche correctement.",
            "Le film et le son sont codés dans l'en-tête de la couche transport.",
            "La couche transport s'assure que la page Web appropriée est envoyée vers la fenêtre de navigateur appropriée.",
            "L'identifiant unique stocké dans le téléphone est une adresse de couche transport."
        ],
        correctAnswers: [2],
        type: "single",
        explanation: "Les numéros de port source et destination sont utilisés pour identifier l'application correcte."
    },
    {
        id: 32,
        question: "Que signifie le terme 'atténuation' dans la communication de données?",
        options: [
            "Temps pour qu'un signal atteigne sa destination",
            "Fuite de signaux d'une paire de câbles à une autre",
            "Renforcement d'un signal par un dispositif de mise en réseau",
            "Perte de puissance du signal à mesure que la distance augmente"
        ],
        correctAnswers: [3],
        type: "single",
        explanation: "L'atténuation est la perte de puissance du signal sur la distance."
    },
    {
        id: 33,
        question: "Que se passe-t-il si l'adresse de la passerelle par défaut n'est pas correctement configurée sur un hôte ?",
        options: [
            "Le commutateur ne transfère pas les paquets initiés par l'hôte.",
            "L'hôte ne peut pas communiquer avec les autres hôtes du réseau local.",
            "L'hôte doit utiliser le protocole ARP pour déterminer l'adresse de la passerelle.",
            "Une requête ping vers 127.0.0.1 échoue.",
            "L'hôte ne peut pas communiquer avec les hôtes situés sur d'autres réseaux."
        ],
        correctAnswers: [4],
        type: "single",
        explanation: "Sans passerelle par défaut correcte, l'hôte ne peut pas atteindre les réseaux distants."
    },
    {
        id: 34,
        question: "Quel type de malware peut ralentir les performances du réseau ?",
        options: [
            "Phishing",
            "Ver",
            "Virus",
            "Courrier indésirable"
        ],
        correctAnswers: [1],
        type: "single",
        explanation: "Les vers se propagent sur le réseau et consomment de la bande passante."
    },
    {
        id: 35,
        question: "Quelle est la conséquence de la configuration d'un routeur avec la commande ipv6 unicast-routing ?",
        options: [
            "Les interfaces de routeur activées IPv6 commencent à envoyer des messages d'annonces de routeur.",
            "Il crée statiquement une adresse monodiffusion globale sur ce routeur.",
            "Toutes les interfaces du routeur seront automatiquement activées.",
            "Chaque interface de routeur génère une adresse link-local IPv6."
        ],
        correctAnswers: [0],
        type: "single",
        explanation: "La commande active le routage IPv6 et les messages RA sur les interfaces."
    },
    {
        id: 36,
        question: "Quelles sont les trois caractéristiques du réseau décrites dans un scénario de basculement automatique vers une connexion secondaire ?",
        options: [
            "Intégrité",
            "Qualité de service",
            "Réseau sur courant électrique",
            "Tolérance aux pannes",
            "Évolutivité",
            "Sécurité"
        ],
        correctAnswers: [1, 3, 5],
        type: "multiple",
        explanation: "La QoS, la tolérance aux pannes et la sécurité sont des caractéristiques réseau importantes."
    },
    {
        id: 37,
        question: "Une société possède un serveur de fichiers qui partage un dossier. Toute personne a des droits en lecture seule, mais les administrateurs ont des droits de modification. Quel composant AAA est impliqué ?",
        options: [
            "Autorisation",
            "Automatisation",
            "Authentification",
            "Traçabilité"
        ],
        correctAnswers: [0],
        type: "single",
        explanation: "L'autorisation détermine ce que l'utilisateur peut faire une fois authentifié."
    },
    {
        id: 38,
        question: "Un administrateur reçoit un message d'erreur lors de la configuration d'un commutateur depuis le mode utilisateur. L'invite est Switch>. Quel est le problème ?",
        options: [
            "L'administrateur doit d'abord passer en mode d'exécution privilégié.",
            "L'administrateur doit se connecter via le port de console.",
            "L'administrateur est déjà en mode de configuration globale.",
            "La commande complète configure terminal doit être utilisée."
        ],
        correctAnswers: [0],
        type: "single",
        explanation: "Le symbole > indique le mode utilisateur. Il faut passer en mode privilégié avec 'enable'."
    },
    {
        id: 39,
        question: "Les protocoles utilisés dans la communication réseau définissent trois conditions de transmission précises. Lesquelles ?",
        options: [
            "Le codage des messages",
            "L'installation du périphérique terminal",
            "Les caractéristiques des connecteurs",
            "Les options de remise du message",
            "La taille du message",
            "La sélection des supports"
        ],
        correctAnswers: [0, 3, 4],
        type: "multiple",
        explanation: "Le codage, les options de remise et la taille du message sont définis par les protocoles."
    },
    {
        id: 40,
        question: "Quelles sont les deux causes courantes de dégradation du signal lors de l'utilisation du câblage UTP?",
        options: [
            "Terminaison incorrecte",
            "Blindage de mauvaise qualité dans le câble",
            "Installation de câbles dans le conduit",
            "Câble ou connecteurs de mauvaise qualité",
            "Perte de lumière sur de longues distances"
        ],
        correctAnswers: [0, 3],
        type: "multiple",
        explanation: "Une mauvaise terminaison et des câbles de mauvaise qualité causent des dégradations."
    },
    {
        id: 41,
        question: "Quels sont les deux protocoles qui interviennent sur la couche supérieure de la pile de protocoles TCP/IP?",
        options: [
            "POP",
            "DNS",
            "TCP",
            "Ethernet",
            "UDP",
            "IP"
        ],
        correctAnswers: [0, 1],
        type: "multiple",
        explanation: "POP et DNS sont des protocoles de la couche application."
    },
    {
        id: 42,
        question: "Quelles sont deux caractéristiques du protocole IP ?",
        options: [
            "Fonctionne indépendamment des supports réseau.",
            "Ne nécessite pas de connexion dédiée de bout en bout.",
            "Reconstitue dans le bon ordre les segments désordonnés côté destination.",
            "Retransmet les paquets en cas d'erreur.",
            "Garantit la remise des paquets."
        ],
        correctAnswers: [0, 1],
        type: "multiple",
        explanation: "IP est un protocole sans connexion et indépendant du support."
    },
    {
        id: 43,
        question: "Quel sous-réseau comprend l'adresse 192.168.1.96 en tant qu'adresse d'hôte utilisable ?",
        options: [
            "192.168.1.64/26",
            "192.168.1.64/29",
            "192.168.1.32/27",
            "192.168.1.32/28"
        ],
        correctAnswers: [0],
        type: "single",
        explanation: "Le sous-réseau 192.168.1.64/26 a une plage de 192.168.1.65 à 192.168.1.126."
    },
    {
        id: 44,
        question: "Parmi les propositions suivantes, lesquelles expliquent comment évaluer les modèles de flux de trafic ?",
        options: [
            "Capturer uniquement le trafic WAN",
            "Capturer uniquement le trafic des zones qui reçoivent le plus de trafic",
            "Capturer le trafic pendant les périodes de pointe",
            "Capturer le trafic les weekends",
            "Capturer le trafic sur plusieurs segments du réseau"
        ],
        correctAnswers: [2, 4],
        type: "multiple",
        explanation: "Le trafic doit être capturé aux heures de pointe et sur différents segments."
    },
    {
        id: 45,
        question: "Quel serait l'ID d'interface d'une interface compatible IPv6 avec une adresse MAC de 1C-6F-65-C2-BD-F8 lorsque l'ID d'interface est généré à l'aide du processus EUI-64 ?",
        options: [
            "1E6F:65FF:FEC2:BDF8",
            "0C6F:65FF:FEC2:BDF8",
            "C16F:65FF:FEC2:BDF8",
            "106F:65FF:FEC2:BDF8"
        ],
        correctAnswers: [0],
        type: "single",
        explanation: "EUI-64 insère FFFE au milieu et inverse le 7ème bit."
    },
    {
        id: 46,
        question: "Un périphérique IPv6 envoie un paquet avec l'adresse de destination FF02::2. Quelle est la cible de ce paquet ?",
        options: [
            "Tous les périphériques IPv6 sur le réseau",
            "Tous les périphériques IPv6 sur la liaison locale",
            "Tous les serveurs DHCP IPv6",
            "Tous les routeurs IPv6 configurés sur la liaison locale"
        ],
        correctAnswers: [3],
        type: "single",
        explanation: "FF02::2 est l'adresse multicast pour tous les routeurs sur la liaison locale."
    },
    {
        id: 47,
        question: "Un client utilise SLAAC pour obtenir une adresse IPv6. Une fois l'adresse générée, que doit faire le client avant de l'utiliser ?",
        options: [
            "Envoyer un message de sollicitation de voisin ICMPv6 pour vérifier que l'adresse n'est pas utilisée.",
            "Envoyer un message DHCPv6 REQUEST au serveur.",
            "Envoyer un message de sollicitation de routeur ICMPv6.",
            "Envoyer un message DHCPv6 INFORMATION-REQUEST."
        ],
        correctAnswers: [0],
        type: "single",
        explanation: "Le DAD (Duplicate Address Detection) utilise la sollicitation de voisin."
    },
    {
        id: 48,
        question: "Un employé utilise des outils réseau sans fil gratuits pour déterminer des informations sur les réseaux sans fil de l'entreprise. De quel type d'attaque s'agit-il?",
        options: [
            "Accès",
            "Cheval de Troie",
            "Reconnaissance",
            "DoS"
        ],
        correctAnswers: [2],
        type: "single",
        explanation: "Une attaque de reconnaissance vise à découvrir des informations sur le réseau."
    },
    {
        id: 49,
        question: "Quelles informations la commande show startup-config affiche-t-elle ?",
        options: [
            "Le programme bootstrap de la mémoire morte",
            "L'image IOS copiée dans la mémoire vive",
            "Le contenu du fichier de configuration en cours dans la mémoire vive",
            "Le contenu du fichier de configuration enregistré dans la mémoire NVRAM"
        ],
        correctAnswers: [3],
        type: "single",
        explanation: "show startup-config affiche la configuration sauvegardée en NVRAM."
    },
    {
        id: 50,
        question: "Un administrateur réseau souhaite avoir le même masque de sous-réseau pour trois sous-réseaux: Téléphones IP – 10 adresses, PC – 8 adresses, Imprimantes – 2 adresses. Quel masque faudrait-il utiliser ?",
        options: [
            "255.255.255.248",
            "255.255.255.252",
            "255.255.255.240",
            "255.255.255.0"
        ],
        correctAnswers: [2],
        type: "single",
        explanation: "Le masque /28 (255.255.255.240) offre 14 adresses, suffisant pour 10 hôtes."
    },
    {
        id: 51,
        question: "Quelles sont les trois normes couramment suivies pour la construction et l'installation de câblage?",
        options: [
            "Brochage",
            "Longueur des câbles",
            "Couleur du connecteur",
            "Types de connecteurs",
            "Coût par mètre",
            "Résistance à la traction de l'isolant"
        ],
        correctAnswers: [0, 1, 3],
        type: "multiple",
        explanation: "Le brochage, la longueur et les types de connecteurs sont standardisés."
    },
    {
        id: 52,
        question: "Quelle technique utilise-t-on avec un câble à paires torsadées non blindées pour isoler les signaux des interférences ?",
        options: [
            "Envelopper les paires de fils d'un blindage métallique",
            "Placer le câble à l'intérieur d'une gaine plastique souple",
            "Enrouler les brins en hélice pour former des paires torsadées",
            "Insérer des connecteurs reliés à la terre"
        ],
        correctAnswers: [2],
        type: "single",
        explanation: "La torsion des paires annule les champs magnétiques et réduit la diaphonie."
    },
    {
        id: 53,
        question: "Un câblage Ethernet installé près des éclairages fluorescents transporte des signaux déformés. Quels facteurs peuvent interférer ?",
        options: [
            "EMI",
            "Interférences",
            "RFI",
            "Longueur étendue du câblage",
            "Atténuation du signal"
        ],
        correctAnswers: [0, 2],
        type: "multiple",
        explanation: "Les interférences électromagnétiques (EMI) et radiofréquences (RFI) affectent les câbles cuivre."
    },
    {
        id: 54,
        question: "Quel service est fourni par DNS ?",
        options: [
            "Permet de transférer des données entre un client et un serveur.",
            "Utilise le cryptage pour sécuriser l'échange sur le Web.",
            "Traduit des noms de domaines en adresses IP",
            "Ensemble de règles pour échanger du texte et des fichiers multimédia sur le web."
        ],
        correctAnswers: [2],
        type: "single",
        explanation: "DNS traduit les noms de domaine en adresses IP."
    },
    {
        id: 55,
        question: "Quelles sont les fonctions fournies par la couche réseau ?",
        options: [
            "Fournir des connexions de bout en bout dédiées",
            "Diriger les paquets de données vers les hôtes de destination sur d'autres réseaux",
            "Placer des données sur le support réseau",
            "Fournir des périphériques finaux dotés d'un identificateur de réseau unique",
            "Transport de données entre des processus sur les hôtes"
        ],
        correctAnswers: [1, 3],
        type: "multiple",
        explanation: "La couche réseau route les paquets et fournit l'adressage logique."
    },
    {
        id: 56,
        question: "Quelles propositions sont correctes dans la comparaison des en-têtes IPv4 et IPv6 ?",
        options: [
            "Le champ Durée de vie d'IPv4 a été remplacé par le champ Limite de nombre de sauts dans IPv6.",
            "Le champ Somme de contrôle d'en-tête d'IPv4 est conservé dans IPv6.",
            "Le champ Version d'IPv4 n'est pas conservé dans IPv6.",
            "Le champ Adresse de destination est une nouveauté d'IPv6.",
            "Le champ Adresse source d'IPv4 est conservé dans IPv6."
        ],
        correctAnswers: [0, 4],
        type: "multiple",
        explanation: "Le TTL devient Hop Limit et les champs d'adresse sont conservés."
    },
    {
        id: 57,
        question: "Trois employés utilisent le réseau: un consulte une page Web, un effectue des transactions financières, un participe à une conférence audio. Avec QoS, quelles sont les priorités ?",
        options: [
            "Conférence audio, transactions financières, page Web",
            "Transactions financières, page Web, conférence audio",
            "Conférence audio, page Web, transactions financières",
            "Transactions financières, conférence audio, page Web"
        ],
        correctAnswers: [0],
        type: "single",
        explanation: "L'audio en temps réel a la priorité la plus haute, suivi des transactions puis du web."
    },
    {
        id: 58,
        question: "Un administrateur réseau ajoute un réseau local devant prendre en charge 200 périphériques. Quel est le plus petit masque réseau utilisable ?",
        options: [
            "255.255.255.192",
            "255.255.255.0",
            "255.255.255.224",
            "255.255.255.240"
        ],
        correctAnswers: [1],
        type: "single",
        explanation: "Un masque /24 (255.255.255.0) offre 254 adresses hôtes."
    },
    {
        id: 59,
        question: "Qu'est-ce qu'une fonction de la couche de liaison de données?",
        options: [
            "Fournit des données entre deux applications",
            "Fournit une livraison de bout en bout de données entre les hôtes",
            "Prévoit l'échange de trames sur un média local commun",
            "Fournit la mise en forme des données"
        ],
        correctAnswers: [2],
        type: "single",
        explanation: "La couche liaison de données gère l'échange de trames sur le média local."
    },
    {
        id: 60,
        question: "Un hôte tente d'envoyer un paquet à un périphérique sur un réseau distant, mais il n'a aucun mappage dans son cache ARP. Comment obtient-il l'adresse MAC de destination ?",
        options: [
            "Il envoie la trame avec une adresse MAC de diffusion.",
            "Il envoie une requête au serveur DNS.",
            "Il envoie une requête ARP pour l'adresse MAC de la passerelle par défaut.",
            "Il envoie la trame et utilise sa propre adresse MAC comme destination.",
            "Il envoie une requête ARP pour l'adresse MAC du périphérique de destination."
        ],
        correctAnswers: [2],
        type: "single",
        explanation: "Pour un réseau distant, l'hôte doit obtenir l'adresse MAC de la passerelle."
    },
    {
        id: 61,
        question: "Quelle méthode de commutation supprime les trames qui ne passent pas le contrôle FCS ?",
        options: [
            "Commutation cut-through",
            "Commutation sans frontières",
            "Mise en mémoire tampon des ports d'entrée",
            "Commutation par stockage et retransmission (store-and-forward)"
        ],
        correctAnswers: [3],
        type: "single",
        explanation: "Store-and-forward vérifie le FCS avant de transmettre la trame."
    },
    {
        id: 62,
        question: "Quel est l'avantage pour les petites entreprises d'adopter IMAP au lieu de POP ?",
        options: [
            "IMAP envoie et récupère les e-mails, tandis que POP récupère uniquement.",
            "Les messages sont stockés sur les serveurs de messagerie jusqu'à suppression manuelle.",
            "POP conserve les messages une courte période, IMAP les conserve longtemps.",
            "POP permet le stockage centralisé, IMAP permet un stockage distribué."
        ],
        correctAnswers: [1],
        type: "single",
        explanation: "IMAP garde les messages sur le serveur jusqu'à suppression manuelle."
    },
    {
        id: 63,
        question: "Un utilisateur se plaint qu'une page Web externe prend plus de temps à charger. Quel outil le technicien doit-il utiliser ?",
        options: [
            "nslookup",
            "ping",
            "tracert",
            "ipconfig /displaydns"
        ],
        correctAnswers: [2],
        type: "single",
        explanation: "tracert permet de localiser où se trouve le délai dans le chemin."
    },
    {
        id: 64,
        question: "Quelle plage d'adresses link-local peut être attribuée à une interface IPv6 ?",
        options: [
            "FEC0::/10",
            "FF00::/8",
            "FE80::/10",
            "FDEE::/7"
        ],
        correctAnswers: [2],
        type: "single",
        explanation: "Les adresses link-local IPv6 sont dans la plage FE80::/10."
    },
    {
        id: 65,
        question: "Un serveur reçoit un paquet avec le port de destination 22. Quelle application de service est demandée ?",
        options: [
            "TFTP",
            "SSH",
            "DHCP",
            "DNS"
        ],
        correctAnswers: [1],
        type: "single",
        explanation: "Le port 22 est utilisé par SSH."
    },
    {
        id: 66,
        question: "Citez deux caractéristiques communes aux protocoles TCP et UDP.",
        options: [
            "La numérotation des ports",
            "Connexion en trois étapes",
            "L'utilisation de sommes de contrôle",
            "La possibilité de transmettre des données voix numérisées",
            "Une communication sans connexion",
            "La taille de la fenêtre par défaut"
        ],
        correctAnswers: [0, 2],
        type: "multiple",
        explanation: "TCP et UDP utilisent tous deux les numéros de port et les sommes de contrôle."
    },
    {
        id: 67,
        question: "Un administrateur ajoute un réseau local devant prendre en charge 61 périphériques. Quel est le plus petit masque réseau utilisable ?",
        options: [
            "255.255.255.192",
            "255.255.255.224",
            "255.255.255.128",
            "255.255.255.0"
        ],
        correctAnswers: [2],
        type: "single",
        explanation: "Un masque /25 (255.255.255.128) offre 126 adresses hôtes."
    },
    {
        id: 68,
        question: "Quel service est fourni par DHCP ?",
        options: [
            "Permet les discussions en ligne en temps réel.",
            "Permet l'accès à distance aux périphériques.",
            "Utilise le chiffrement pour fournir un accès distant sécurisé.",
            "Affecte dynamiquement des adresses IP aux périphériques."
        ],
        correctAnswers: [3],
        type: "single",
        explanation: "DHCP attribue dynamiquement les configurations IP."
    },
    {
        id: 69,
        question: "Le bloc d'adresses IPv6 2001:db8:0:ca00::/56 est attribué. Combien de sous-réseaux peuvent être créés sans utiliser de bits dans l'espace d'ID d'interface ?",
        options: [
            "512",
            "256",
            "4 096",
            "1 024"
        ],
        correctAnswers: [1],
        type: "single",
        explanation: "De /56 à /64, il y a 8 bits, soit 256 sous-réseaux possibles."
    },
    {
        id: 70,
        question: "Pourquoi un commutateur de couche 2 nécessite-t-il une adresse IP ?",
        options: [
            "Pour permettre au commutateur d'être géré à distance",
            "Pour permettre au commutateur d'envoyer des trames de diffusion",
            "Pour permettre au commutateur de fonctionner en tant que passerelle",
            "Pour permettre au commutateur de recevoir des trames de PC connectés"
        ],
        correctAnswers: [0],
        type: "single",
        explanation: "L'adresse IP sur le SVI permet la gestion à distance du commutateur."
    },
    {
        id: 71,
        question: "De quel type de menace parle-t-on lorsqu'un tableur désactive le pare-feu local ?",
        options: [
            "Dépassement de mémoire tampon",
            "DoS",
            "Attaques en force",
            "Cheval de Troie"
        ],
        correctAnswers: [3],
        type: "single",
        explanation: "Un cheval de Troie est un logiciel malveillant caché dans un programme légitime."
    },
    {
        id: 72,
        question: "Quelle est l'une des principales caractéristiques de la couche de liaison de données?",
        options: [
            "Elle convertit un flux de bits en un code prédéfini.",
            "Elle empêche le protocole de couche supérieure de connaître le support physique.",
            "Elle accepte les paquets de la couche 3 et décide du chemin de transmission.",
            "La couche physique doit générer les signaux sur le support."
        ],
        correctAnswers: [1],
        type: "single",
        explanation: "La couche liaison isole les couches supérieures des détails du support physique."
    },
    {
        id: 73,
        question: "Quel est le caractère d'un NIC qui le place au niveau de la couche de liaison de données du modèle OSI ?",
        options: [
            "Raccordez le câble Ethernet",
            "La pile de protocoles TCP/IP",
            "Adresse MAC",
            "Adresse IP",
            "Port RJ-45"
        ],
        correctAnswers: [2],
        type: "single",
        explanation: "L'adresse MAC est l'adressage de couche 2."
    },
    {
        id: 74,
        question: "Une requête ping vers la passerelle par défaut échoue mais une requête ping vers un hôte distant réussit. Quelle est la cause probable ?",
        options: [
            "La passerelle par défaut est configurée avec une adresse IP incorrecte.",
            "Des règles de sécurité empêchent la passerelle de traiter les requêtes ping.",
            "La passerelle par défaut n'est pas opérationnelle.",
            "La pile TCP/IP sur la passerelle ne fonctionne pas correctement."
        ],
        correctAnswers: [1],
        type: "single",
        explanation: "Si le ping vers l'hôte distant fonctionne, la passerelle fonctionne mais bloque peut-être ICMP."
    },
    {
        id: 75,
        question: "Un technicien en réseau étudie l'utilisation du câblage à fibre optique. Quels deux problèmes doivent être pris en compte ?",
        options: [
            "La fibre optique est plus coûteuse que le câblage en cuivre.",
            "Le câble à fibre optique résiste à une manipulation rugueuse.",
            "Le câblage à fibre optique est sensible aux interférences RFI.",
            "Le câblage à fibre optique nécessite une mise à la terre spécifique.",
            "Le câblage à fibres optiques nécessite une expertise différente pour la terminaison."
        ],
        correctAnswers: [0, 4],
        type: "multiple",
        explanation: "La fibre est plus coûteuse et nécessite des compétences spécifiques pour l'installation."
    },
    {
        id: 76,
        question: "Que se passe-t-il lorsque la commande 'transport input ssh' est entrée sur les lignes VTY du switch?",
        options: [
            "Le commutateur nécessite un nom d'utilisateur/mot de passe pour l'accès distant.",
            "Le client SSH sur le commutateur est activé.",
            "La communication entre le commutateur et les utilisateurs distants est cryptée.",
            "Le commutateur nécessite des connexions via un logiciel client propriétaire."
        ],
        correctAnswers: [2],
        type: "single",
        explanation: "La commande 'transport input ssh' active le chiffrement SSH sur les lignes VTY."
    },
    {
        id: 77,
        question: "Quels sont les deux types de trafic qui utilisent le protocole RTP (Real-Time Transport Protocol)?",
        options: [
            "Voix",
            "P2P (peer-to-peer)",
            "Transfert de fichier",
            "Web",
            "Vidéo"
        ],
        correctAnswers: [0, 4],
        type: "multiple",
        explanation: "RTP est utilisé pour le transport de la voix et de la vidéo en temps réel."
    },
    {
        id: 78,
        question: "Quels sont les deux messages ICMPv6 qui ne sont pas présents dans ICMP pour IPv4?",
        options: [
            "Sollicitation de voisin",
            "Destination injoignable",
            "Confirmation de l'hôte",
            "Redirection de la route",
            "Annonce de routeur",
            "Dépassement du délai"
        ],
        correctAnswers: [0, 4],
        type: "multiple",
        explanation: "La sollicitation de voisin et l'annonce de routeur sont spécifiques à ICMPv6."
    },
    {
        id: 79,
        question: "Quel service est fourni par SMTP ?",
        options: [
            "Permet l'accès à distance aux périphériques.",
            "Permet les discussions en ligne en temps réel.",
            "Permet aux clients d'envoyer des courriels à un serveur et aux serveurs d'envoyer des courriels à d'autres serveurs.",
            "Utilise le chiffrement pour fournir un accès distant sécurisé."
        ],
        correctAnswers: [2],
        type: "single",
        explanation: "SMTP est le protocole d'envoi de courrier électronique."
    },
    {
        id: 80,
        question: "Quels sont les deux types de messages ICMPv6 nécessaires pour permettre la résolution des adresses de couche 3 en adresses MAC ?",
        options: [
            "Sollicitation de voisin",
            "Requête d'écho",
            "Réponse d'écho",
            "Annonce de routeur",
            "Annonce de voisin",
            "Sollicitation de routeur"
        ],
        correctAnswers: [0, 4],
        type: "multiple",
        explanation: "La sollicitation et l'annonce de voisin remplacent ARP dans IPv6."
    },
    {
        id: 81,
        question: "Un administrateur réseau cherche à préserver la confidentialité lors d'une connexion distante CLI. Quel est le mode d'accès le plus approprié ?",
        options: [
            "SSH",
            "AUX",
            "Console",
            "Telnet"
        ],
        correctAnswers: [0],
        type: "single",
        explanation: "SSH chiffre toutes les communications, y compris les mots de passe."
    },
    {
        id: 82,
        question: "Un serveur reçoit un paquet avec le port de destination 110. Quelle application de service est demandée ?",
        options: [
            "SMTP",
            "DHCP",
            "POP3",
            "DNS"
        ],
        correctAnswers: [2],
        type: "single",
        explanation: "Le port 110 est utilisé par POP3 pour la récupération de courrier."
    },
    {
        id: 83,
        question: "Quelles sont les trois parties d'une adresse de monodiffusion globale IPv6 ?",
        options: [
            "ID de sous-réseau",
            "Masque de sous-réseau",
            "Adresse de diffusion",
            "Préfixe de routage global",
            "ID d'interface"
        ],
        correctAnswers: [0, 3, 4],
        type: "multiple",
        explanation: "Une adresse IPv6 globale comprend le préfixe de routage global, l'ID de sous-réseau et l'ID d'interface."
    },
    {
        id: 84,
        question: "Quelle couche du modèle TCP/IP fournit un chemin pour transférer des messages via un interréseau ?",
        options: [
            "Application",
            "Transport",
            "Accès réseau",
            "Internet"
        ],
        correctAnswers: [3],
        type: "single",
        explanation: "La couche Internet (réseau) du modèle TCP/IP gère l'adressage et le routage."
    },
    {
        id: 85,
        question: "Un serveur reçoit un paquet avec le port de destination 21. Quelle application de service est demandée ?",
        options: [
            "DHCP",
            "SSH",
            "FTP",
            "TFTP"
        ],
        correctAnswers: [2],
        type: "single",
        explanation: "Le port 21 est utilisé par FTP pour le contrôle de connexion."
    },
    {
        id: 86,
        question: "Quel service est fourni par POP3 ?",
        options: [
            "Permet de chatter en temps réel entre utilisateurs distants.",
            "Utilise le chiffrement pour fournir un accès distant sécurisé.",
            "Récupère le courrier électronique à partir du serveur en le téléchargeant vers l'application cliente.",
            "Permet l'accès à distance aux périphériques."
        ],
        correctAnswers: [2],
        type: "single",
        explanation: "POP3 télécharge les emails du serveur vers le client."
    },
    {
        id: 87,
        question: "Quel masque de sous-réseau faut-il utiliser si un réseau a 40 terminaux nécessitant des adresses IP ?",
        options: [
            "255.255.255.0",
            "255.255.255.240",
            "255.255.255.128",
            "255.255.255.192",
            "255.255.255.224"
        ],
        correctAnswers: [3],
        type: "single",
        explanation: "Un masque /26 (255.255.255.192) offre 62 adresses hôtes, suffisant pour 40 terminaux."
    },
    {
        id: 88,
        question: "Un serveur reçoit un paquet avec le port de destination 80. Quelle application de service est demandée ?",
        options: [
            "SMTP",
            "DNS",
            "HTTP",
            "DHCP"
        ],
        correctAnswers: [2],
        type: "single",
        explanation: "Le port 80 est utilisé par HTTP pour le web."
    },
    {
        id: 89,
        question: "Un administrateur réseau ajoute un réseau local devant prendre en charge 10 périphériques. Quel est le plus petit masque réseau utilisable ?",
        options: [
            "255.255.255.248",
            "255.255.255.240",
            "255.255.255.224",
            "255.255.255.192"
        ],
        correctAnswers: [1],
        type: "single",
        explanation: "Un masque /28 (255.255.255.240) offre 14 adresses hôtes."
    },
    {
        id: 90,
        question: "Quel avantage présente l'utilisation d'un protocole défini par une norme ouverte ?",
        options: [
            "Une entreprise peut avoir le monopole sur le marché.",
            "Un protocole à norme ouverte n'est ni contrôlé ni régulé.",
            "Il favorise la compétitivité et permet de choisir.",
            "Le protocole peut être exécuté uniquement sur un équipement d'un fournisseur."
        ],
        correctAnswers: [2],
        type: "single",
        explanation: "Les normes ouvertes favorisent l'interopérabilité et le choix des fournisseurs."
    },
    {
        id: 91,
        question: "Quelles sont les deux principales responsabilités de la sous-couche MAC Ethernet?",
        options: [
            "Délimitation des trames",
            "Accès aux supports",
            "Adressage logique",
            "Détection des erreurs",
            "L'encapsulation de données"
        ],
        correctAnswers: [0, 1],
        type: "multiple",
        explanation: "La sous-couche MAC gère la délimitation des trames et l'accès au support."
    },
    {
        id: 92,
        question: "Une imprimante laser filaire est partagée sur un réseau domestique. Quel est le modèle de réseau suivi ?",
        options: [
            "Peer-to-peer (P2P)",
            "Basé sur un client",
            "Maître-esclave",
            "Point à point"
        ],
        correctAnswers: [0],
        type: "single",
        explanation: "Le partage de ressources entre ordinateurs sans serveur dédié est un réseau P2P."
    },
    {
        id: 93,
        question: "Pendant le transfert du trafic, que fait le routeur après avoir fait correspondre l'adresse IP de destination à un réseau directement connecté ?",
        options: [
            "Ignorer le trafic après avoir consulté la table de routage",
            "Rechercher l'adresse de tronçon suivant",
            "Commuter le paquet vers l'interface directement connectée",
            "Analyser l'adresse IP de destination"
        ],
        correctAnswers: [2],
        type: "single",
        explanation: "Pour un réseau directement connecté, le routeur transfère vers cette interface."
    },
    {
        id: 94,
        question: "Un utilisateur envoie une requête HTTP à un serveur distant. Quelles informations sont ajoutées au champ d'adresse d'une trame pour indiquer la destination ?",
        options: [
            "L'adresse MAC de l'hôte de destination",
            "L'adresse MAC de la passerelle par défaut",
            "Le domaine réseau de l'hôte de destination",
            "L'adresse IP de la passerelle par défaut"
        ],
        correctAnswers: [1],
        type: "single",
        explanation: "Pour un réseau distant, la trame utilise l'adresse MAC de la passerelle."
    },
    {
        id: 95,
        question: "Quelles sont les deux méthodes les plus efficaces pour la protection contre les programmes malveillants ?",
        options: [
            "Installer et mettre à jour un logiciel antivirus",
            "Implémenter RAID",
            "Implémenter des mots de passe forts",
            "Implémenter des pare-feu réseau",
            "Implémenter un VPN",
            "Mettre à jour le système d'exploitation et d'autres logiciels"
        ],
        correctAnswers: [0, 5],
        type: "multiple",
        explanation: "L'antivirus et les mises à jour sont essentiels contre les malwares."
    },
    {
        id: 96,
        question: "Un serveur reçoit un paquet avec le port de destination 67. Quelle application de service est demandée ?",
        options: [
            "FTP",
            "DHCP",
            "Telnet",
            "SSH"
        ],
        correctAnswers: [1],
        type: "single",
        explanation: "Le port 67 est utilisé par le serveur DHCP."
    },
    {
        id: 97,
        question: "Un utilisateur tente d'accéder à http://www.cisco.com/ sans succès. Quelles sont les deux valeurs de configuration à définir ?",
        options: [
            "Adresse MAC d'origine",
            "Serveur DNS",
            "Numéro du port source",
            "Serveur HTTP",
            "Passerelle par défaut"
        ],
        correctAnswers: [1, 4],
        type: "multiple",
        explanation: "Le serveur DNS et la passerelle par défaut sont nécessaires pour accéder à Internet."
    },
    {
        id: 98,
        question: "Comment un ordinateur peut-il suivre le flux de données entre plusieurs sessions d'application ?",
        options: [
            "Selon le numéro de port source utilisé par chaque application.",
            "Selon l'adresse MAC de destination utilisée.",
            "Selon l'adresse IP de destination utilisée.",
            "Selon l'adresse IP source utilisée."
        ],
        correctAnswers: [0],
        type: "single",
        explanation: "Les numéros de port source identifient chaque session d'application."
    },
    {
        id: 99,
        question: "Quel service est fourni par HTTP ?",
        options: [
            "Utilise le cryptage pour sécuriser l'échange sur le Web.",
            "Permet les transferts de données entre un client et un serveur de fichiers.",
            "Permet les discussions en temps réel entre utilisateurs distants.",
            "Ensemble de règles de base pour l'échange de texte et fichiers multimédia sur le Web."
        ],
        correctAnswers: [3],
        type: "single",
        explanation: "HTTP définit les règles pour l'échange de contenu web."
    },
    {
        id: 100,
        question: "Quel service est fourni par FTP ?",
        options: [
            "Ensemble de règles pour l'échange de texte et fichiers multimédia sur le Web.",
            "Permet les discussions en temps réel entre utilisateurs distants.",
            "Permet les transferts de données entre un client et un serveur de fichiers.",
            "Utilise le cryptage pour sécuriser l'échange sur le Web."
        ],
        correctAnswers: [2],
        type: "single",
        explanation: "FTP permet le transfert de fichiers entre client et serveur."
    },
    {
        id: 101,
        question: "Un serveur reçoit un paquet avec le port de destination 53. Quelle application de service est demandée ?",
        options: [
            "DNS",
            "NetBIOS",
            "POP3",
            "IMAP"
        ],
        correctAnswers: [0],
        type: "single",
        explanation: "Le port 53 est utilisé par DNS."
    },
    {
        id: 102,
        question: "Un administrateur réseau ajoute un réseau local devant prendre en charge 25 périphériques. Quel est le plus petit masque réseau utilisable ?",
        options: [
            "255.255.255.128",
            "255.255.255.192",
            "255.255.255.224",
            "255.255.255.240"
        ],
        correctAnswers: [2],
        type: "single",
        explanation: "Un masque /27 (255.255.255.224) offre 30 adresses hôtes."
    },
    {
        id: 103,
        question: "Un serveur reçoit un paquet avec le port de destination 143. Quelle application de service est demandée ?",
        options: [
            "IMAP",
            "FTP",
            "SSH",
            "Telnet"
        ],
        correctAnswers: [0],
        type: "single",
        explanation: "Le port 143 est utilisé par IMAP."
    },
    {
        id: 104,
        question: "Un utilisateur exécute tracert. À quel moment un routeur arrêterait-il de transférer le paquet ?",
        options: [
            "Lorsque le routeur reçoit un message ICMP Time Exceeded",
            "Lorsque la valeur RTT atteint zéro",
            "Lorsque l'hôte répond avec un message ICMP Echo Reply",
            "Lorsque la valeur du champ TTL atteint zéro"
        ],
        correctAnswers: [3],
        type: "single",
        explanation: "Le routeur arrête de transférer quand le TTL atteint 0."
    },
    {
        id: 105,
        question: "Quel est l'ID de sous-réseau associé à l'adresse IPv6 2001:DA48:FC5:A4:3D1B::1/64 ?",
        options: [
            "2001:DA48::/64",
            "2001:DA48:FC5::A4:/64",
            "2001:DA48:FC5:A4::/64",
            "2001::/64"
        ],
        correctAnswers: [2],
        type: "single",
        explanation: "Avec un préfixe /64, l'ID de sous-réseau est 2001:DA48:FC5:A4::/64."
    },
    {
        id: 106,
        question: "Un administrateur réseau ajoute un réseau local devant prendre en charge 90 périphériques. Quel est le plus petit masque réseau utilisable ?",
        options: [
            "255.255.255.128",
            "255.255.255.240",
            "255.255.255.248",
            "255.255.255.224"
        ],
        correctAnswers: [0],
        type: "single",
        explanation: "Un masque /25 (255.255.255.128) offre 126 adresses hôtes."
    },
    {
        id: 107,
        question: "Quelle technologie sans fil a des exigences de faible consommation et faible débit, ce qui la rend populaire dans les environnements IoT ?",
        options: [
            "Bluetooth",
            "Zigbee",
            "WiMAX",
            "Wi-Fi"
        ],
        correctAnswers: [1],
        type: "single",
        explanation: "Zigbee est conçu pour les applications IoT à faible consommation."
    },
    {
        id: 25,
        question: "Examinez l'illustration. Une société utilise le bloc d'adresses de 128.107.0.0/16 pour son réseau. Quel masque de sous-réseau peut fournir un maximum de sous-réseaux de taille égale tout en fournissant suffisamment d'adresses d'hôte pour chaque sous-réseau dans l'illustration ?",
        image: "images/question25.png",
        options: [
            "255.255.255.240",
            "255.255.255.224",
            "255.255.255.0",
            "255.255.255.192",
            "255.255.255.128"
        ],
        correctAnswers: [4],
        type: "single",
        explanation: "Le sous-réseau avec 100 hôtes nécessite au minimum 7 bits d'hôte (2^7 - 2 = 126 adresses utilisables). Le masque 255.255.255.128 (/25) fournit 126 adresses hôtes utilisables, ce qui est suffisant pour tous les sous-réseaux."
    },
    {
        id: 26,
        question: "Reliez chaque description au terme correspondant.",
        image: "images/question3.png",
        options: [
            "Dimensionnement des messages: Processus consistant à décomposer un message long en parties distinctes avant de les envoyer sur le réseau",
            "Encapsulation des messages: Processus consistant à placer un format de message à l'intérieur d'un autre",
            "Codage des messages: Processus permettant de convertir des informations dans un format acceptable pour la transmission"
        ],
        correctAnswers: [0, 1, 2],
        type: "multiple",
        explanation: "Le dimensionnement décompose les messages, l'encapsulation place un format dans un autre, et le codage convertit les informations pour la transmission."
    },
    {
        id: 27,
        question: "Un administrateur réseau ajoute un nouveau réseau local à une filiale. Le nouveau réseau local doit prendre en charge 4 périphériques connectés. Quel est le plus petit masque réseau que l'administrateur réseau peut utiliser pour le nouveau réseau?",
        image: "images/question4.png",
        options: [
            "255.255.255.224",
            "255.255.255.248",
            "255.255.255.128",
            "255.255.255.192"
        ],
        correctAnswers: [1],
        type: "single",
        explanation: "Un masque /29 (255.255.255.248) offre 6 adresses hôtes utilisables, suffisant pour 4 périphériques."
    },
    {
        id: 28,
        question: "Reportez-vous à l'illustration. Quelle interface dont l'adresse IP de périphérique doit être utilisée comme paramètre de passerelle par défaut de l'hôte H1?",
        image: "images/question16.png",
        options: [
            "R2: S0/0/1",
            "R1: S0/0/0",
            "R1: G0/0",
            "R2: S0/0/0"
        ],
        correctAnswers: [2],
        type: "single",
        explanation: "La passerelle par défaut de H1 doit être l'interface du routeur R1 connectée au même réseau local, soit G0/0."
    },
    {
        id: 29,
        question: "Examinez l'illustration. Quel est le problème avec le raccordement affiché ?",
        image: "images/question23.png",
        options: [
            "La longueur détorsadée de chaque fil est trop longue.",
            "Les câbles sont trop épais pour le connecteur utilisé.",
            "Le mauvais type de connecteur est utilisé.",
            "Le treillis de cuivre n'aurait pas dû être retiré."
        ],
        correctAnswers: [0],
        type: "single",
        explanation: "Lors de la terminaison d'un câble RJ-45, les fils non torsadés ne doivent pas être trop longs et la gaine en plastique doit être sertie vers le bas pour maintenir les fils en place."
    },
    {
        id: 30,
        question: "Examinez l'illustration. Associez les réseaux aux adresses IP et aux préfixes capables de répondre aux exigences d'adressage d'hôte utilisable pour chaque réseau.",
        image: "images/question27.png",
        options: [
            "Réseau A (100 hôtes): 192.168.0.128 /25",
            "Réseau B (30 hôtes): 192.168.0.0 /26",
            "Réseau C (25 hôtes): 192.168.0.96 /27",
            "Réseau D (2 hôtes): 192.168.0.80 /30"
        ],
        correctAnswers: [0, 1, 2, 3],
        type: "multiple",
        explanation: "Le réseau A doit utiliser 192.168.0.128 /25 (126 adresses). Le réseau B doit utiliser 192.168.0.0 /26 (62 adresses). Le réseau C doit utiliser 192.168.0.96 /27 (30 adresses). Le réseau D doit utiliser 192.168.0.80 /30 (2 adresses)."
    },
    {
        id: 31,
        question: "Associez les caractéristiques aux méthodes de transmission correspondantes.",
        image: "images/question33.png",
        options: [
            "Cut-through: A une faible latence",
            "Cut-through: Peut transférer des trames incomplètes",
            "Cut-through: Démarre la transmission lorsque l'adresse de destination est reçue",
            "Store-and-forward: Stocke toujours la trame entière",
            "Store-and-forward: Vérifie le CRC avant d'effectuer la transmission",
            "Store-and-forward: Vérifie la longueur de la trame avant d'effectuer la transmission"
        ],
        correctAnswers: [0, 1, 2, 3, 4, 5],
        type: "multiple",
        explanation: "Un commutateur store-and-forward stocke toujours la trame entière avant la transmission, et vérifie son CRC et la longueur de la trame. Un commutateur cut-through peut transmettre des trames avant de recevoir le champ d'adresse de destination, présentant ainsi moins de latence."
    },
    {
        id: 32,
        question: "Associez les fonctionnalités aux catégories.",
        image: "images/question35.png",
        options: [
            "Adresse IP: contenu dans l'en-tête de couche 3",
            "Adresse IP: séparés en une partie réseau et un identifiant unique",
            "Adresse IP: 32 ou 128 bits",
            "Adresse MAC: contenu dans l'en-tête de couche 2",
            "Adresse MAC: séparés en OUI et un identifiant unique",
            "Adresse MAC: 48 bits"
        ],
        correctAnswers: [0, 1, 2, 3, 4, 5],
        type: "multiple",
        explanation: "Les adresses IP sont dans l'en-tête de couche 3 (32 ou 128 bits), séparées en partie réseau et identifiant. Les adresses MAC sont dans l'en-tête de couche 2 (48 bits), séparées en OUI et identifiant unique."
    },
    {
        id: 33,
        question: "Reportez-vous à l'illustration. Si PC1 envoie un paquet à PC2 et que le routage a été configuré entre les deux routeurs, que fait R1 de l'en-tête de trame Ethernet intégré par PC1?",
        image: "images/question39.png",
        options: [
            "Rien, puisque le routeur est associé à une route vers le réseau de destination",
            "Ouvrir l'en-tête et l'utiliser pour déterminer si les données sont à envoyer ou non à S0/0/0",
            "Supprimer l'en-tête Ethernet et configurer un nouvel en-tête de couche 2 avant de l'envoyer à S0/0/0",
            "Ouvrir l'en-tête et remplacer l'adresse MAC de destination par une nouvelle adresse"
        ],
        correctAnswers: [2],
        type: "single",
        explanation: "Lorsque PC1 forme les différents en-têtes attachés aux données, l'un de ces en-têtes est l'en-tête de couche 2. Étant donné que PC1 se connecte à un réseau Ethernet, un en-tête Ethernet est utilisé. L'adresse MAC source sera l'adresse MAC de PC1 et l'adresse MAC de destination sera celle de G0/0 sur R1. Lorsque R1 obtient ces informations, le routeur supprime l'en-tête de couche 2 et en crée un nouveau pour le type de réseau sur lequel les données seront placées (la liaison série)."
    },
    {
        id: 34,
        question: "Associez les descriptions aux adresses IP correspondantes.",
        image: "images/question42.png",
        options: [
            "Adresse de bouclage: 127.0.0.1",
            "Adresse expérimentale: 240.2.6.255",
            "À une adresse publique: 198.133.219.2",
            "Adresse link-local: 169.254.1.5"
        ],
        correctAnswers: [0, 1, 2, 3],
        type: "multiple",
        explanation: "127.0.0.1 est l'adresse de bouclage. 240.2.6.255 est une adresse expérimentale. 198.133.219.2 est une adresse publique. 169.254.1.5 est une adresse link-local."
    },
    {
        id: 35,
        question: "Quel scénario décrit une fonction fournie par la couche transport ?",
        options: [
            "Un employé d'une entreprise accède à un serveur Web situé sur un réseau d'entreprise. La couche transport formate l'écran afin que la page Web s'affiche correctement quel que soit le périphérique utilisé pour accéder au site Web.",
            "Un étudiant regarde un petit film sur le Web avec le son activé. Le film et le son sont codés dans l'en-tête de la couche transport.",
            "Un étudiant a deux fenêtres de navigateur Web ouvertes pour accéder à deux sites Web. La couche transport s'assure que la page Web appropriée est envoyée vers la fenêtre de navigateur appropriée.",
            "Un étudiant utilise un téléphone VoIP d'une salle de classe pour appeler chez lui. L'identifiant unique stocké dans le téléphone est une adresse de couche transport utilisée pour contacter un autre périphérique réseau sur le même réseau."
        ],
        correctAnswers: [2],
        type: "single",
        explanation: "Les numéros de port source et de destination sont utilisés pour identifier l'application et la fenêtre correctes au sein de cette application."
    },
    {
        id: 36,
        question: "Quelle est la conséquence de la configuration d'un routeur avec la commande de configuration globale ipv6 unicast-routing ?",
        options: [
            "Les interfaces de routeur activées IPv6 commencent à envoyer des messages d'annonces de routeur ICMPv6.",
            "Il crée statiquement une adresse monodiffusion globale sur ce routeur.",
            "Toutes les interfaces du routeur seront automatiquement activées.",
            "Chaque interface de routeur génère une adresse link-local IPv6."
        ],
        correctAnswers: [0],
        type: "single",
        explanation: "La commande ipv6 unicast-routing active le routage IPv6 sur le routeur et fait envoyer des messages RA (Router Advertisement) par les interfaces IPv6."
    },
    {
        id: 37,
        question: "Reportez-vous à l'illustration. L'hôte B sur le sous-réseau Enseignants transmet un paquet à l'hôte D sur le sous-réseau Students. Quelles adresses de couche 2 et de couche 3 sont contenues dans les PDU qui sont transmises de l'hôte B au routeur?",
        image: "images/question48.png",
        options: [
            "Adresse de destination de la couche 2 = 00-00-0c-94-36-ab, Adresse source de la couche 2 = 00-00-0c-94-36-bb, Adresse de destination de la couche 3 = 172.16.20.200, Adresse source de la couche 3 = 172.16.10.200",
            "Adresse de destination de la couche 2 = 00-00-0c-94-36-cd, Adresse source de la couche 2 = 00-00-0c-94-36-bb, Adresse de destination de la couche 3 = 172.16.20.99, Adresse source de la couche 3 = 172.16.10.200",
            "Adresse de destination de la couche 2 = 00-00-0c-94-36-cd, Adresse source de la couche 2 = 00-00-0c-94-36-bb, Adresse de destination de la couche 3 = 172.16.20.200, Adresse source de la couche 3 = 172.16.10.200",
            "Adresse de destination de la couche 2 = 00-00-0c-94-36-ab, Adresse source de la couche 2 = 00-00-0c-94-36-bb, Adresse de destination de la couche 3 = 172.16.20.99, Adresse source de la couche 3 = 172.16.10.200"
        ],
        correctAnswers: [0],
        type: "single",
        explanation: "L'adresse de destination de la couche 2 est l'adresse MAC de la passerelle (00-00-0c-94-36-ab). L'adresse source de la couche 2 est l'adresse MAC de l'hôte B (00-00-0c-94-36-bb). L'adresse de destination de la couche 3 est l'IP de l'hôte D (172.16.20.200). L'adresse source de la couche 3 est l'IP de l'hôte B (172.16.10.200)."
    }
];
